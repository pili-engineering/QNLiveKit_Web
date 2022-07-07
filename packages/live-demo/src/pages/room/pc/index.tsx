import React, { useRef, useState, useReducer, useEffect } from 'react';
import { message, Input, Button } from 'antd';
import update from 'immutability-helper';
import Clipboard from 'clipboard';

import styles from './index.module.scss';

interface Message {
  nickname: string;
  content: string;
}

interface RoomDetail {
  title: string;
  onlineCount: number;
  ownerId: string;
  roomId: string;
  notice: string;
  avatar: string;
  cover: string;
}

interface IStore {
  messageArray: Message[];
  roomDetail: RoomDetail;
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IStore = {
  messageArray: [],
  roomDetail: {
    notice: '',
    ownerId: 'ownerId123456ownerId123456ownerId123456ownerId123456',
    onlineCount: 22,
    avatar: 'https://img.alicdn.com/imgextra/i4/O1CN01BQZKz41EGtPZp3U5P_!!6000000000325-2-tps-1160-1108.png',
    title: 'title123title123title123title123title123',
    roomId: 'roomId123',
    cover: 'https://img.alicdn.com/imgextra/i3/O1CN01sE83c029Xm6lbhNru_!!6000000008078-2-tps-510-648.png',
  },
};

const actionTypes = {
  addMsg: 'addMsg',
  setRoomDetail: 'setRoomDetail',
};

const reducer = (state: IStore, action: IAction): IStore => {
  switch (action.type) {
    case actionTypes.addMsg:
      return update(state, {
        messageArray: {
          $push: Array.isArray(action.payload)
            ? action.payload
            : [action.payload],
        },
      });
    case actionTypes.setRoomDetail:
      console.log(
        update(state, {
          $set: {
            ...action.payload,
          },
        }),
      );
      return update(state, {
        roomDetail: {
          $set: {
            ...action.payload,
          },
        },
      });
    default:
      return state;
  }
};

/**
 * 无直播时，显示封面
 */
const renderNoLive = () => {
  const noLivePlaceholder = 'https://img.alicdn.com/imgextra/i4/O1CN011T1YNZ1cV8WGJMFfC_!!6000000003605-0-tps-1024-683.jpg';
  return <div
    className={styles.noLive}
    style={{
      backgroundImage: `url(${noLivePlaceholder})`
    }}
  />;
};

/**
 * 渲染在线人数
 * @param value
 */
const renderIconOnlineCount = (value: number) => {
  return <div className={styles.dataItem}>
    <svg className="icon" aria-hidden="true">
      <use xlinkHref="#icon-ic_header_guankan"></use>
    </svg>
    {value}
  </div>;
};

/**
 * 渲染分享icon
 */
const renderIconShare = () => {
  return <div
    className="share"
    style={{ cursor: 'pointer' }}
    data-clipboard-text={window.location.href}
  >
    <svg
      className="icon"
      aria-hidden="true"
      style={{ fontSize: '20px' }}
    >
      <use xlinkHref="#icon-ic_header_fenxiang"></use>
    </svg>
    分享
  </div>;
};

export const RoomPC: React.FC = (props) => {
  const chatMainEl = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLiving, setIsLiving] = useState(false);
  const [isPlayback, setIsPlayback] = useState(false);
  const [isMuteAll, setIsMuteAll] = useState(false);
  const [isMuteSelf, setIsMuteSelf] = useState(false);
  const [messageValue, setMessageValue] = useState('');

  useEffect(() => {
    const clipboard = new Clipboard('.share');
    clipboard.on('success', () => {
      message.success('播放地址已复制到剪贴板');
    });
    return () => {
      clipboard.destroy();
    };
  }, []);

  const chatGoBottom = () => {
    const scrollHeight = chatMainEl.current?.scrollHeight || 0;
    const clientHeight = chatMainEl.current?.clientHeight || 0;
    chatMainEl.current?.scrollTo(0, scrollHeight - clientHeight);
  };

  const addMsgItem = (messageItem: Message) => {
    dispatch({
      type: actionTypes.addMsg,
      payload: messageItem,
    });
    chatGoBottom();
  };

  const onSendComment: React.MouseEventHandler<HTMLElement> = () => {
    if (!messageValue) return;
    addMsgItem({
      nickname: '我',
      content: messageValue,
    });
    setMessageValue('');
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.playerContainer}>
          <div className={styles.playerHeader}>
            <div className={styles.liveInfo}>
              <div className={styles.avatar}>
                <img src={state.roomDetail.avatar} alt="avatar"/>
              </div>
              <div className={styles.infoMain}>
                <div className={styles.title}>
                  {state.roomDetail.title || '直播间'}
                </div>
                <div className={styles.data}>
                  {renderIconOnlineCount(state.roomDetail.onlineCount)}
                  {renderIconShare()}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.playerMain}>
            {
              !isLiving && !isPlayback && renderNoLive()
            }
            <div
              id="player"
              className={`prism-player ${
                !isLiving && !isPlayback ? 'hidden' : ''
              } ${styles.player}`}
            />
          </div>
          <div className={styles.playerFooter}/>
        </div>
        <div className={styles.chatContainer}>
          <div className={styles.chatMain} ref={chatMainEl}>
            <div className={`${styles.chatItem} ${styles.chatItemNotice}`}>
              欢迎大家来到直播间！直播间内严禁出现违法违规、低俗色情、吸烟酗酒等内容，若有违规行为请及时举报。
            </div>
            {
              state.messageArray.map((data, index) => (
                <div
                  className={`${styles.chatItem} ${
                    data.nickname ? '' : styles.chatItemNotice
                  }`}
                  key={index}
                >
                  <span className={styles.emphasize}>{data.nickname ? data.nickname + '：' : ''}</span>
                  <span>{data.content}</span>
                </div>
              ))
            }
          </div>
          <div className={styles.chatFooter}>
            <Input.TextArea
              className={styles.chatTextarea}
              autoSize={false}
              disabled={isMuteAll || isMuteSelf}
              value={messageValue}
              placeholder={
                !isMuteAll && !isMuteSelf
                  ? '和主播说点什么...'
                  : `${isMuteAll ? '主播已开启全员禁言...' : '您已被禁言...'}`
              }
              onChange={(e) => setMessageValue(e.target.value)}
            />
            <Button type="primary" onClick={onSendComment}>发送</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
