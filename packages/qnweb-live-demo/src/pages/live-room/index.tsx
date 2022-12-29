import React, {
	KeyboardEvent,
	useEffect,
	useMemo,
	useRef,
	useState
} from 'react';
import { useMount, useRequest, useUnmount } from 'ahooks';
import { Input, message } from 'antd';
import { Dialog } from 'antd-mobile';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';

import { LiveApi } from '@/api';
import {
	ChatBox,
	ChatBoxListItem,
	GiftAnimation,
	GiftAnimationHandler,
	GiftPanel,
	GiftPanelProps,
	IconBarrage,
	IconChatSvg,
	IconLike,
	IconLikeProps,
	IconMoreSvg,
	IconShoppingCartSvg,
	LiveTimer,
	MorePanel,
	ProductListPanel,
	ProductListPanelProps,
	RoomHeader,
	WaitingNotice
} from '@/components';
import { curConfig } from '@/config';
import { useIMStore, useUserStore } from '@/store';
import {
	getUrlQuery,
	QNIMManager,
	roomStatusAdapter,
	XGPlayer,
	XGPlayerConstructor
} from '@/utils';

import { isBarrageMessage, isChatMessage, isGiftMessage } from './messageUtil';

import styles from './index.module.scss';

export const LiveRoom: React.FC = () => {
	const history = useHistory();
	const urlQueryRef = useRef<{
		liveId: string;
	}>({
		liveId: getUrlQuery('liveId') || ''
	});
	const giftAnimationRef = useRef<GiftAnimationHandler>(null);

	const playerClientRef = useRef<XGPlayerConstructor | null>(null);
	const imClientRef = useRef<QNIMManager | null>(null);
	const { state: imStoreState } = useIMStore();
	const { state: userStoreState } = useUserStore();

	const [chatList, setChatList] = useState<ChatBoxListItem[]>([]);
	const [inputValue, setInputValue] = useState<string>('');

	const [morePanelVisible, setMorePanelVisible] = useState(false);
	const [giftPanelVisible, setGiftPanelVisible] = useState(false);
	const [productListVisible, setProductListVisible] = useState(false);
	const [isInputBarrage, setIsInputBarrage] = useState(false);
	const [selectedGift, setSelectedGift] = useState<string>();
	const [isInputFocus, setIsInputFocus] = useState(false);

	/**
	 * 加入房间，加入房间后，开始心跳轮询
	 */
	const { runAsync: joinRunAsync, data: joinData } = useRequest(
		() => {
			return LiveApi.join({
				live_id: urlQueryRef.current.liveId
			}).then((result) => {
				heartbeatRun();
				return result;
			});
		},
		{
			manual: true
		}
	);

	/**
	 * 离开房间
	 */
	const { run: leaveRun } = useRequest(
		() => {
			return LiveApi.leave({
				live_id: urlQueryRef.current.liveId
			});
		},
		{
			manual: true
		}
	);
	/**
	 * 心跳轮询
	 */
	const { run: heartbeatRun } = useRequest(
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
	/**
	 * 房间信息轮询
	 */
	const { data: roomInfoData } = useRequest(
		() => {
			return LiveApi.getRoomInfo({
				live_id: urlQueryRef.current.liveId
			});
		},
		{
			pollingInterval: 3000
		}
	);
	const { data: userListData } = useRequest(
		() => {
			return LiveApi.getRoomUserList({
				live_id: urlQueryRef.current.liveId,
				page_num: '1',
				page_size: '10'
			});
		},
		{
			pollingInterval: 3000
		}
	);
	const roomInfo = useMemo(() => {
		return roomInfoData?.data;
	}, [roomInfoData]);
	const userList = useMemo(() => {
		return _.orderBy(userListData?.data.list, 'nick');
	}, [userListData]);
	const playerUrl = useMemo(() => {
		return roomInfo?.hls_url;
	}, [roomInfo]);
	/**
	 * 房间状态
	 *
	 */
	const roomStatus = useMemo(() => {
		if (!roomInfo) return;
		return roomStatusAdapter({
			liveStatus: roomInfo?.live_status,
			anchorStatus: roomInfo?.anchor_status
		});
	}, [roomInfo]);

	/**
	 * 直播间商品
	 */
	const { data: productListData } = useRequest(() => {
		return LiveApi.getProductList({
			live_id: urlQueryRef.current.liveId
		});
	});
	const productList = useMemo<ProductListPanelProps['list']>(() => {
		return productListData?.data?.map((item) => {
			return {
				id: item.item_id || '',
				order: item.order,
				currentPrice: item.current_price,
				originalPrice: item.origin_price,
				thumbnail: item.thumbnail,
				title: item.title,
				tags: item.tags?.split(','),
				recordUrl: item.record?.record_url
			};
		});
	}, [productListData]);
	/**
	 * 统计数据
	 */
	const [likeCount, setLikeCount] = useState(0);
	useRequest(() => {
		return LiveApi.getStats({
			live_id: urlQueryRef.current.liveId
		}).then((result) => {
			setLikeCount(
				result?.data?.info?.find((item) => item.type === 6)?.page_view || 0
			);
			return result;
		});
	});

	/**
	 * 礼物
	 */
	const { data: giftData } = useRequest(() => {
		return LiveApi.getGiftList({
			type: '-1'
		});
	});
	const { run: sendGiftRun } = useRequest<
		Awaited<ReturnType<typeof LiveApi.sendGift>>,
		Parameters<typeof LiveApi.sendGift>
	>(
		(params) => {
			return LiveApi.sendGift(params);
		},
		{
			manual: true
		}
	);
	const giftList = useMemo<GiftPanelProps['list']>(() => {
		if (!giftData?.data) return [];
		return giftData.data.map((item) => {
			return {
				id: `${item.gift_id}`,
				title: item.name || '',
				img: item.img || '',
				price: item.gift_id === 1 ? null : item.amount
			};
		});
	}, [giftData]);

	/**
	 * 发送消息
	 */
	const createMsg = (data: { action: string; content: string }) => {
		const { action, content } = data;
		if (
			['liveroom-pubchat', 'liveroom-welcome', 'living_danmu'].includes(action)
		) {
			return JSON.stringify({
				action,
				data: {
					action,
					content,
					sendUser: {
						avatar: userStoreState.avatar,
						im_userid: imStoreState.imUid,
						im_username: imStoreState.imUsername,
						nick: userStoreState.nickname,
						user_id: userStoreState.accountId
					},
					senderRoomId: urlQueryRef.current.liveId
				}
			});
		}
		if (['gift_notify'].includes(action)) {
			const gift = giftData?.data?.find(
				(item) => `${item.gift_id}` === selectedGift
			);
			sendGiftRun({
				live_id: urlQueryRef.current.liveId,
				gift_id: gift?.gift_id || 0,
				amount: gift?.amount || 0
			});
			return JSON.stringify({
				action,
				data: {
					amount: gift?.amount,
					gift_id: gift?.gift_id,
					live_id: urlQueryRef.current.liveId,
					user_id: userStoreState.accountId
				}
			});
		}
		return '';
	};
	const sendChatMessage = (data: Parameters<typeof createMsg>[number]) => {
		const imClient = imClientRef.current;
		if (!imClient) {
			return Promise.reject(new Error(`imClient is ${imClient}`));
		}
		return imClient.sendChannelMsg(
			createMsg(data),
			`${joinData?.data.chat_id || ''}`,
			true
		);
	};
	const sendChatMessageRef = useRef<typeof sendChatMessage | null>(null);
	sendChatMessageRef.current = sendChatMessage;

	/**
	 * 初始化播放器
	 */
	useEffect(() => {
		if (!playerUrl) return;
		if (roomStatus !== 'live') return;

		const PlayerConstructor = XGPlayer.getPlayerConstructor(playerUrl);
		const player = new PlayerConstructor({
			id: 'player',
			url: playerUrl,
			isLive: true,
			playsinline: true,
			autoplay: true,
			width: '100%',
			height: '100%',
			fitVideoSize: 'fixWidth',
			poster: roomInfo?.cover_url,
			controls: false,
			closeVideoClick: true,
			closeVideoTouch: true,
			danmu: {
				area: {
					start: 0.15,
					end: 0.65
				}
			}
		});
		const handleComplete = (result: unknown) => {
			console.log('handleComplete', result);
		};
		const handleError = (result: unknown) => {
			console.log('handleError', result);
		};
		const handleEnded = (result: unknown) => {
			console.log('handleEnded', result);
		};
		const handlePause = (result: unknown) => {
			console.log('handlePause', result);
		};
		const handleWaiting = (result: unknown) => {
			console.log('handleWaiting', result);
		};
		player.on('complete', handleComplete);
		player.on('error', handleError);
		player.on('ended', handleEnded);
		player.on('pause', handlePause);
		player.on('waiting', handleWaiting);
		playerClientRef.current = player;
		return () => {
			player.off('complete', handleComplete);
			player.on('error', handleError);
			player.on('ended', handleEnded);
			player.on('pause', handlePause);
			player.on('waiting', handleWaiting);
			player.destroy();
			playerClientRef.current = null;
		};
	}, [playerUrl, roomInfo?.cover_url, roomStatus]);

	/**
	 * 组件挂载
	 */
	useMount(() => {
		const joinHide = message.loading('正在加入房间...', 0);
		joinRunAsync().then((result) => {
			joinHide();

			const initIMHide = message.loading('正在初始化IM...', 0);
			initIMRunAsync({
				channelId: `${result.data.chat_id || ''}`,
				appid: curConfig.imConfig.appKey
			}).then(() => {
				sendChatMessageRef.current?.({
					action: 'liveroom-welcome',
					content: '进入了房间'
				});
				return initIMHide();
			});
		});
	});
	/**
	 * 组件卸载
	 */
	useUnmount(() => {
		message.destroy();
		leaveRun();
		sendChatMessageRef.current?.({
			action: 'liveroom-welcome',
			content: '离开了房间'
		});
		imClientRef.current?.leaveChannel(`${joinData?.data.chat_id || ''}`);
	});

	/**
	 * 实例化im，并设置监听
	 */
	const handleRtmChannelListener = (result: string) => {
		const json = JSON.parse(result);
		if (isChatMessage(json)) {
			setChatList((prev) => {
				return prev.concat({
					id: `${prev.length}`,
					type: 'text',
					username: json.data.sendUser.nick,
					avatar: json.data.sendUser.avatar,
					content: json.data.content
				});
			});
		}
		if (isGiftMessage(json)) {
			const user = userList?.find(
				(item) => `${item.user_id}` === `${json.data?.user_id}`
			);
			const gift = giftData?.data?.find(
				(item) => `${item.gift_id}` === `${json.data?.gift_id}`
			);

			giftAnimationRef.current?.render({
				avatar: user?.avatar || '',
				username: user?.nick || '',
				giftImg: gift?.img || '',
				content: `送出${gift?.name}`
			});

			setChatList((prev) => {
				return prev.concat({
					id: `${prev.length}`,
					type: 'gift',
					username: user?.nick,
					avatar: user?.avatar,
					content: gift?.name
				});
			});
		}
		if (isBarrageMessage(json)) {
			playerClientRef.current.danmu.sendComment({
				duration: 5000,
				id: `${Math.random()}`,
				start: 0,
				txt: json.data.content,
				style: {
					color: '#fff',
					fontSize: '12px',
					borderRadius: '4px',
					padding: '2px 4px',
					backgroundColor: '#0000003F'
				}
			});
		}
		console.log('handleRtmChannelListener json', json);
	};
	const handleRtmChannelListenerRef = useRef<
		typeof handleRtmChannelListener | null
	>(null);
	handleRtmChannelListenerRef.current = handleRtmChannelListener;
	useEffect(() => {
		const imClient = QNIMManager.create();
		imClientRef.current = imClient;
		const handler = (result: string) => {
			handleRtmChannelListenerRef.current?.(result);
		};
		imClient.addRtmChannelListener(handler);
		return () => {
			imClient.removeRtmChannelListener(handler);
		};
	}, []);

	/**
	 * 初始化im=>登录im=>加入聊天室
	 */
	const { runAsync: initIMRunAsync } = useRequest<
		unknown,
		Array<{
			appid: string;
			channelId: string;
		}>
	>(
		(params) => {
			const { imUsername, imPassword } = imStoreState;
			const { channelId } = params;
			const imClient = imClientRef.current;
			if (!imUsername)
				return Promise.reject(new Error(`imUsername is ${imUsername}`));
			if (!imPassword)
				return Promise.reject(new Error(`imPassword is ${imPassword}`));
			if (!imClient)
				return Promise.reject(new Error(`imClient is ${imClient}`));

			return LiveApi.getAppConfig().then((result) => {
				return imClient
					.init({ appid: result.data?.im_app_id || '' })
					.then(() => {
						return imClient.connect({
							name: imStoreState.imUsername || '',
							password: imStoreState.imPassword || ''
						});
					})
					.then(() => {
						return imClient.joinChannel(channelId);
					});
			});
		},
		{
			manual: true
		}
	);

	/**
	 * 点击回车发送聊天消息
	 * @param event
	 */
	const onKeyDown = (event: KeyboardEvent) => {
		if (event.key.toLowerCase() !== 'enter') return;
		if (!inputValue) return;
		if (isInputBarrage) {
			sendChatMessageRef
				.current?.({
					action: 'living_danmu',
					content: inputValue
				})
				.then(() => {
					setInputValue('');
				});
		} else {
			sendChatMessageRef
				.current?.({
					action: 'liveroom-pubchat',
					content: inputValue
				})
				.then(() => {
					setInputValue('');
				});
		}
	};

	/**
	 * 支付礼物
	 */
	const onGiftPayClick: GiftPanelProps['onGiftPayClick'] = (gift) => {
		if (gift.id === '1') {
			console.log('发红包', gift);
			Dialog.confirm({
				title: '发红包',
				content: <Input placeholder="请输入红包金额" id="giftPriceElement" />
			}).then(() => {
				sendChatMessage({
					action: 'gift_notify',
					content: ''
				});
			});
		} else {
			sendChatMessage({
				action: 'gift_notify',
				content: ''
			});
		}
	};

	/**
	 * 点赞
	 */
	const { run: likeRun } = useRequest(
		() => {
			return LiveApi.like({
				live_id: urlQueryRef.current.liveId
			});
		},
		{ manual: true }
	);

	/**
	 * 点赞
	 */
	const onIconLikeClick: IconLikeProps['onClick'] = () => {
		likeRun();
		setLikeCount((prev) => prev + 1);
	};

	return (
		<div className={styles.page}>
			<div id="player" className={styles.player} />

			<GiftAnimation ref={giftAnimationRef} />

			{roomStatus === 'pause' || roomStatus === 'trailer' ? (
				<WaitingNotice
					className={styles.waitingNotice}
					type={roomStatus}
					startTime={(roomInfo?.start_time || 0) * 1000}
				/>
			) : null}

			<MorePanel
				title="更多"
				visible={morePanelVisible}
				fixedBottom={true}
				onItemClick={(item) => {
					if (item.id === 'gift') {
						setMorePanelVisible(false);
						setGiftPanelVisible(true);
					}
				}}
				onClose={() => setMorePanelVisible(false)}
			/>

			<GiftPanel
				title="礼物打赏"
				list={giftList}
				visible={giftPanelVisible}
				fixedBottom={true}
				selectedGift={selectedGift}
				onItemClick={(item) => setSelectedGift(item.id)}
				onGiftPayClick={onGiftPayClick}
				onClose={() => setGiftPanelVisible(false)}
			/>

			<ProductListPanel
				title="商品列表"
				visible={productListVisible}
				fixedBottom={true}
				list={productList}
				onItemRecordClick={(result) =>
					history.push(
						`/record?liveId=${urlQueryRef.current.liveId}&productId=${result.id}`
					)
				}
				onItemBuyClick={(result) =>
					history.push(
						`/shop?liveId=${urlQueryRef.current.liveId}&productId=${result.id}`
					)
				}
				onClose={() => setProductListVisible(false)}
			/>

			<RoomHeader
				className={styles.header}
				avatar={roomInfo?.anchor_info?.avatar}
				userCount={roomInfo?.online_count || 0}
				userList={userList}
				title={roomInfo?.title}
				subTitle={roomInfo?.anchor_info?.nick}
				onClose={() => history.goBack()}
			/>

			<LiveTimer className={styles.liveTimer} title={roomInfo?.live_id} />

			<ChatBox
				className={styles.chatBox}
				list={chatList}
				scrollHeight={200}
				autoScroll={true}
			/>

			<div className={styles.footer}>
				<div className={styles.inputBox}>
					<Input
						className={styles.input}
						value={inputValue}
						onChange={(event) => setInputValue(event.target.value)}
						onKeyDown={onKeyDown}
						onFocus={() => setIsInputFocus(true)}
						onBlur={() => setIsInputFocus(false)}
					/>
					<img
						className={`${styles.icon} ${styles.iconChat}`}
						src={IconChatSvg}
						alt={IconChatSvg}
					/>
				</div>

				{isInputFocus ? null : (
					<div className={styles.icons}>
						<IconBarrage
							value={isInputBarrage}
							onChange={(value) => setIsInputBarrage(value)}
						/>
						<img
							src={IconShoppingCartSvg}
							alt={IconShoppingCartSvg}
							onClick={() => setProductListVisible(true)}
						/>

						<IconLike count={likeCount} onClick={onIconLikeClick} />

						<img
							className={styles.icon}
							src={IconMoreSvg}
							alt={IconMoreSvg}
							onClick={() => setMorePanelVisible(true)}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
