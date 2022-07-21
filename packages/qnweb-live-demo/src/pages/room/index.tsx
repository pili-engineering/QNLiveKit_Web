import React, { useEffect, useRef, useState } from 'react';
import { useRequest } from 'ahooks';
import { message, Modal } from 'antd';
import { useHistory } from 'react-router-dom';

import {
  getUrlQuery,
  IMMessage,
  InfoChangeListenerCallback,
  PlayerManager,
  PlayerType,
  QNIMManager,
  UA
} from '@/utils';
import { LiveApi } from '@/api';
import { curConfig } from '@/config';
import { useIMStore, useUserStore } from '@/store';
import {
  Message, RoomDetail,
  RoomMobile, RoomPC, RoomProps
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
  const [playerType, setPlayerType] = useState<PlayerType>('flv.js');
  const playerManagerRef = useRef<PlayerManager | null>(null);
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
    const manager = PlayerManager.create({
      type: playerType,
      url: playerUrl,
      element
    });
    manager.addInfoChange(handleInfoChanged);
    playerManagerRef.current = manager;
    if (isPlayerChangeRef.current) {
      onReplay();
    }
    return () => {
      manager.removeInfoChange(handleInfoChanged);
      manager.destroy();
      playerManagerRef.current = null;
    };
  }, [playerType, playerUrl]);


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
    const manager = playerManagerRef.current;
    if (!manager) return;
    setPlayLoading(true);
    setIsPlaying(false);
    manager.play().catch(error => {
      setIsPlaying(false);
      Modal.error({
        title: '播放出错',
        content: `错误信息：${JSON.stringify(error)}`,
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

  /**
   * 切换播放器
   * @param playerType
   */
  const onPlayerChange: RoomProps['onPlayerChange'] = playerType => {
    isPlayerChangeRef.current = true;
    setPlayerType(playerType);
  };

  return UA.isPC ? <RoomPC
    playerType={playerType}
    isPlaying={isPlaying}
    playLoading={playLoading}
    playerUrl={playerUrl}
    messages={messages}
    noticeVisible={noticeVisible}
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
    onPlayerChange={onPlayerChange}
  /> : <RoomMobile
    playerType={playerType}
    isPlaying={isPlaying}
    playLoading={playLoading}
    playerUrl={playerUrl}
    messages={messages}
    noticeVisible={noticeVisible}
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
    onPlayerChange={onPlayerChange}
  />;
};
