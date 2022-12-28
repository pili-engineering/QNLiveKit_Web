import { useMount, useRequest, useUnmount } from 'ahooks';
import { message, Modal } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { LiveApi } from '@/api';
import { curConfig } from '@/config';
import { useIMStore, useUserStore } from '@/store';
import {
	getUrlQuery,
	IMMessage,
	InfoChangeListenerCallback,
	PlayerManager,
	PlayerType,
	QNIMManager,
	UA
} from '@/utils';

import { Message, RoomProps } from './_types';
import { RoomMobile } from './mobile';
import { RoomPC } from './pc';

const imClient = QNIMManager.create();

export const Room = () => {
	const history = useHistory();
	const urlQueryRef = useRef<{
		liveId: string;
	}>({
		liveId: getUrlQuery('liveId') || ''
	});
	const { state: userStoreState } = useUserStore();
	const [messageValue, setMessageValue] = useState('');
	const { runAsync: runJoin, cancel: cancelJoin } = useRequest(
		() => {
			return LiveApi.join({
				live_id: urlQueryRef.current.liveId
			}).then((result) => {
				dispatchIMStoreState({
					type: 'PATCH',
					payload: {
						imGroupId: `${result.data?.chat_id}`
					}
				});
				return result;
			});
		},
		{
			manual: true
		}
	);
	/**
	 * 房间信息轮询
	 */
	const { run: runRoomFullInfo, data: roomFullInfoData } = useRequest(
		() => {
			const { liveId: live_id } = urlQueryRef.current;
			return Promise.allSettled([
				LiveApi.getRoomInfo({ live_id }),
				LiveApi.getRoomUserList({
					live_id,
					page_num: '1',
					page_size: '10'
				})
			]).then(([roomInfoResult, roomUserListResult]) => {
				const info =
					roomInfoResult.status === 'fulfilled'
						? roomInfoResult.value.data
						: null;
				const userListData =
					roomUserListResult.status === 'fulfilled'
						? roomUserListResult.value.data
						: null;
				return {
					info,
					userListData
				};
			});
		},
		{
			pollingInterval: 3000,
			manual: true
		}
	);
	const roomInfo = useMemo(() => {
		return roomFullInfoData?.info;
	}, [roomFullInfoData]);
	const playerUrl = useMemo(() => {
		return roomInfo?.flv_url;
	}, [roomInfo]);

	/**
	 * 房间内心跳
	 */
	const { run: runHeartbeat } = useRequest(
		() => {
			return LiveApi.heartbeat({
				live_id: urlQueryRef.current.liveId
			});
		},
		{
			manual: true,
			pollingInterval: 3000
		}
	);

	const [isPlaying, setIsPlaying] = useState(false);
	const [noticeVisible, setNoticeVisible] = useState(false);
	const [playLoading, setPlayLoading] = useState(true);

	/**
	 * 播放器
	 */
	const [playerType, setPlayerType] = useState<PlayerType>('flv.js');
	const playerClientRef = useRef<PlayerManager | null>(null);
	const isPlayerChangeRef = useRef<boolean>(false);
	const handleInfoChanged: InfoChangeListenerCallback = (info) => {
		if (info.state === 'complete') {
			setIsPlaying(true);
			setPlayLoading(false);
		}
		if (info.state === 'error') {
			console.error(info.result);
			Modal.error({
				title: '播放器出错',
				content: JSON.stringify(info)
			});
		}
	};
	useEffect(() => {
		const element = document.getElementById('player');
		if (!playerUrl || !element) {
			return;
		}
		const client = PlayerManager.create({
			type: playerType,
			url: playerUrl,
			element
		});
		client.addInfoChangeListener(handleInfoChanged);
		playerClientRef.current = client;
		if (isPlayerChangeRef.current) {
			onReplay();
		}
		return () => {
			client.removeInfoChangeListener(handleInfoChanged);
			client.destroy();
			playerClientRef.current = null;
		};
	}, [playerType, playerUrl]);

	/**
	 * 组件挂载
	 */
	useMount(() => {
		runJoin().then(() => {
			runHeartbeat();
			runRoomFullInfo();
		});
	});

	/**
	 * 组件销毁
	 */
	useUnmount(() => {
		message.destroy();
		Modal.destroyAll();
		cancelJoin();
		LiveApi.leave({
			live_id: urlQueryRef.current.liveId
		});
	});

	/**
	 * im
	 */
	const { state: imStoreState, dispatch: dispatchIMStoreState } = useIMStore();
	const [messages, setMessages] = useState<Message[]>([]);
	const [imJoined, setIMJoined] = useState(false);

	/**
	 * 发送消息通用方法
	 * @param action
	 * @param content
	 */
	const sendMessage = (action: string, content: string) => {
		const json: IMMessage = {
			action,
			data: {
				action,
				content,
				sendUser: {
					avatar: roomInfo?.anchor_info?.avatar,
					im_userid: imStoreState?.imUid,
					im_username: imStoreState?.imUsername,
					nick: userStoreState.nickname,
					user_id: userStoreState.accountId
				},
				senderRoomId: urlQueryRef.current.liveId
			}
		};
		return imClient.sendChannelMsg(
			JSON.stringify(json),
			imStoreState.imGroupId || '',
			true
		);
	};

	/**
	 * 初始化im
	 */
	useEffect(() => {
		const name = imStoreState.imUsername || '';
		const password = imStoreState.imPassword || '';
		const imGroupId = imStoreState.imGroupId || '';
		if (!name || !password || !imGroupId) {
			return;
		}
		const hide = message.loading({
			key: 'im',
			duration: 0,
			content: 'im初始化中...'
		});
		imClient
			.init({
				appid: curConfig.imConfig.appKey
			})
			.then(() => {
				return imClient.connect({
					name,
					password
				});
			})
			.then(() => {
				return imClient.joinChannel(imGroupId);
			})
			.then(() => {
				setIMJoined(true);
				message.success('im初始化成功');
			})
			.catch((error) => {
				Modal.error({
					title: 'im初始化出错',
					content: `错误信息: ${JSON.stringify(error)}`
				});
			})
			.finally(() => {
				hide();
			});
		return () => {
			hide();
		};
	}, [
		imStoreState.imGroupId,
		imStoreState.imUsername,
		imStoreState.imPassword
	]);

	/**
	 * 消息监听
	 */
	useEffect(() => {
		const handleChannelListener = (msg: string) => {
			const json = JSON.parse(msg) as IMMessage;
			if (
				json.action &&
				['liveroom-pubchat', 'liveroom-welcome'].includes(json.action)
			) {
				setMessages((prevMessages) => {
					return prevMessages.concat({
						nickname: json.data?.sendUser?.nick || '',
						content: json.data?.content || ''
					});
				});
			}
		};
		imClient.addRtmChannelListener(handleChannelListener);
		return () => {
			imClient.removeRtmChannelListener(handleChannelListener);
		};
	}, []);

	/**
	 * 加入/离开发送im消息
	 */
	useEffect(() => {
		if (!imJoined) {
			return;
		}
		sendMessage('liveroom-welcome', '进入了房间').then(() => {
			console.log('发送加入im消息成功');
			Modal.info({
				title: '提示',
				content: '点击确认观看直播',
				okText: '确认',
				onOk() {
					onReplay();
				}
			});
		});
		return () => {
			Modal.destroyAll();
			sendMessage('liveroom-welcome', '离开了房间')
				.then(() => {
					console.log('发送离开im消息成功');
					return imClient.leaveChannel(imStoreState.imGroupId || '');
				})
				.then(() => {
					console.log('离开im');
				});
		};
	}, [imJoined]);

	/**
	 * 发送消息
	 */
	const onSendComment = () => {
		if (!messageValue || !imJoined) return;
		return sendMessage('liveroom-pubchat', messageValue)
			.then(() => {
				setMessageValue('');
			})
			.catch((error) => {
				return Modal.error({
					title: 'im发送消息出错',
					content: `错误信息: ${JSON.stringify(error)}`
				});
			});
	};

	/**
	 * 播放出错重播
	 */
	const onReplay = () => {
		const client = playerClientRef.current;
		if (!client) return;
		setPlayLoading(true);
		setIsPlaying(false);
		client
			.play()
			.catch((error) => {
				setIsPlaying(false);
				Modal.error({
					title: '播放出错',
					content: `错误信息：${JSON.stringify(error)}`,
					onOk() {
						onReplay();
					}
				});
			})
			.finally(() => {
				setPlayLoading(false);
			});
	};

	/**
	 * 关闭按钮
	 */
	const onClose = () => {
		history.push('/room-list');
	};

	/**
	 * 切换播放器
	 * @param playerType
	 */
	const onPlayerChange: RoomProps['onPlayerChange'] = (playerType) => {
		isPlayerChangeRef.current = true;
		setPlayerType(playerType);
	};

	return UA.isPC ? (
		<RoomPC
			playerType={playerType}
			isPlaying={isPlaying}
			playLoading={playLoading}
			playerUrl={playerUrl}
			messages={messages}
			noticeVisible={noticeVisible}
			roomInfo={roomInfo}
			messageValue={messageValue}
			onMessageValueChange={setMessageValue}
			onSendComment={onSendComment}
			onNoticeVisibleChange={setNoticeVisible}
			onPlay={onReplay}
			onMessageValueKeyDown={(event) => {
				if (event.key === 'Enter') {
					onSendComment();
				}
			}}
			onPlayerChange={onPlayerChange}
		/>
	) : (
		<RoomMobile
			playerType={playerType}
			isPlaying={isPlaying}
			playLoading={playLoading}
			playerUrl={playerUrl}
			messages={messages}
			noticeVisible={noticeVisible}
			roomInfo={roomInfo}
			messageValue={messageValue}
			onMessageValueChange={setMessageValue}
			onSendComment={onSendComment}
			onNoticeVisibleChange={setNoticeVisible}
			onPlay={onReplay}
			onMessageValueKeyDown={(event) => {
				if (event.key === 'Enter') {
					onSendComment();
				}
			}}
			onClose={onClose}
			onPlayerChange={onPlayerChange}
		/>
	);
};
