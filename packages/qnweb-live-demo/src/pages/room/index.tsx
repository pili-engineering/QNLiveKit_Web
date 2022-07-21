import React, { useEffect, useRef, useState } from 'react';
import { useRequest } from 'ahooks';
import { message, Modal } from 'antd';
import { useHistory } from 'react-router-dom';

import { getUrlQuery, IMMessage, QNIMManager, UA } from '@/utils';
import { LiveApi } from '@/api';
import { curConfig } from '@/config';
import { useIMStore, useUserStore } from '@/store';
import {
  Message, PlayerState, RoomDetail,
  RoomMobile, RoomPC, useQNRTPlayer, UseQNRTPlayerProps
} from './components';

const imClient = QNIMManager.create();

export const Room = () => {
  const history = useHistory();
  const urlQueryRef = useRef<{
    roomId: string
  }>({
    roomId: getUrlQuery('roomId') || '',
  });
  const { state: userStoreState } = useUserStore();
  const [messageValue, setMessageValue] = useState('');
  const { runAsync: runJoin, cancel: cancelJoin } = useRequest(() => {
    return LiveApi.join({
      live_id: urlQueryRef.current.roomId,
    });
  }, {
    manual: true,
  });
  /**
   * 房间信息轮询
   */
  const { run: runGetRoomInfoPolling } = useRequest(() => {
    return LiveApi.getRoomInfo({
      live_id: urlQueryRef.current.roomId,
    }).then(result => {
      const detail = result.data;
      setRoomDetail({
        notice: detail?.notice || '',
        ownerId: detail?.anchor_info.user_id || '',
        onlineCount: detail?.online_count || 0,
        avatar: detail?.anchor_info.avatar || '',
        title: detail?.title || '',
        roomId: detail?.live_id || '',
        cover: detail?.cover_url || '',
      });
      setPlayerUrl(detail?.flv_url || '');
    });
  }, {
    pollingInterval: 3000,
    manual: true,
  });
  /**
   * 房间内心跳
   */
  const { run: runRoomHeartBeat } = useRequest(() => {
    return LiveApi.heartbeat({
      live_id: urlQueryRef.current.roomId,
    });
  }, {
    manual: true,
    pollingInterval: 5000
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [roomDetail, setRoomDetail] = useState<RoomDetail>();
  const [noticeVisible, setNoticeVisible] = useState(false);
  const [playerUrl, setPlayerUrl] = useState<string>();
  const [playLoading, setPlayLoading] = useState(true);

  /**
   * 播放器
   */
  const [playerConfig, setPlayerConfig] = useState<UseQNRTPlayerProps | null>();
  const {
    player,
    playerState,
  } = useQNRTPlayer(playerConfig);

  /**
   * 初始化播放器配置
   */
  useEffect(() => {
    const container = document.querySelector<HTMLDivElement>('#player');
    if (!playerUrl || !container) {
      return;
    }
    setPlayerConfig({
      url: playerUrl,
      container,
    });
  }, [playerUrl, player]);

  /**
   * 播放状态
   */
  useEffect(() => {
    if (playerState === PlayerState.STATE_PLAYING) {
      setIsPlaying(true);
      setPlayLoading(false);
    }
  }, [playerState]);

  /**
   * 加入/离开房间
   */
  useEffect(() => {
    runJoin().then((result) => {
      dispatchIMStoreState({
        type: 'PATCH',
        payload: {
          imGroupId: result.data?.chat_id || '',
        }
      });
      runRoomHeartBeat();
      runGetRoomInfoPolling();
    });
    return () => {
      cancelJoin();
      LiveApi.leave({
        live_id: urlQueryRef.current.roomId,
      });
    };
  }, []);

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
          avatar: roomDetail?.avatar,
          im_userid: imStoreState?.imUid,
          im_username: imStoreState?.imUsername,
          nick: userStoreState.nickname,
          user_id: userStoreState.accountId,
        },
        senderRoomId: urlQueryRef.current.roomId
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
    imClient.init({
      appid: curConfig.imConfig.appKey
    }).then(() => {
      return imClient.connect({
        name,
        password,
      });
    }).then(() => {
      return imClient.joinChannel(imGroupId);
    }).then(() => {
      setIMJoined(true);
      message.success('im初始化成功');
    }).catch(error => {
      Modal.error({
        title: 'im初始化出错',
        content: `错误信息: ${JSON.stringify(error)}`,
      });
    }).finally(() => {
      hide();
    });
    return () => {
      hide();
    };
  }, [imStoreState.imGroupId, imStoreState.imUsername, imStoreState.imPassword]);

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
        setMessages(prevMessages => {
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
      sendMessage('liveroom-welcome', '离开了房间').then(() => {
        console.log('发送离开im消息成功');
        return imClient.leaveChannel(imStoreState.imGroupId || '');
      }).then(() => {
        console.log('离开im');
      });
    };
  }, [imJoined]);

  /**
   * 发送消息
   */
  const onSendComment = () => {
    if (!messageValue || !imJoined) return;
    return sendMessage('liveroom-pubchat', messageValue).then(() => {
      setMessageValue('');
    }).catch(error => {
      return Modal.error({
        title: 'im发送消息出错',
        content: `错误信息: ${JSON.stringify(error)}`,
      });
    });
  };

  /**
   * 播放出错重播
   */
  const onReplay = () => {
    const url = playerConfig?.url;
    const container = playerConfig?.container;
    if (!url || !container || !player) {
      return;
    }
    setPlayLoading(true);
    player.play(url, container).catch(error => {
      setIsPlaying(false);
      Modal.error({
        title: '播放出错',
        content: `错误信息：${error.message}`,
        onOk() {
          onReplay();
        }
      });
    }).finally(() => {
      setPlayLoading(false);
    });
  };

  /**
   * 关闭按钮
   */
  const onClose = () => {
    history.push('/room-list');
  };

  return UA.isPC ? <RoomPC
    messages={messages}
    playLoading={playLoading}
    playerUrl={playerUrl}
    noticeVisible={noticeVisible}
    isPlaying={isPlaying}
    roomDetail={roomDetail}
    messageValue={messageValue}
    onMessageValueChange={setMessageValue}
    onSendComment={onSendComment}
    onNoticeVisibleChange={setNoticeVisible}
    onPlay={onReplay}
    onMessageValueKeyDown={event => {
      if (event.key === 'Enter') {
        onSendComment();
      }
    }}
  /> : <RoomMobile
    messages={messages}
    playLoading={playLoading}
    playerUrl={playerUrl}
    noticeVisible={noticeVisible}
    isPlaying={isPlaying}
    roomDetail={roomDetail}
    messageValue={messageValue}
    onMessageValueChange={setMessageValue}
    onSendComment={onSendComment}
    onNoticeVisibleChange={setNoticeVisible}
    onPlay={onReplay}
    onMessageValueKeyDown={event => {
      if (event.key === 'Enter') {
        onSendComment();
      }
    }}
    onClose={onClose}
  />;
};
