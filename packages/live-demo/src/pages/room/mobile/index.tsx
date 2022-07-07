import React, { useState, useReducer, useEffect } from 'react';
import update from 'immutability-helper';
import Clipboard from 'clipboard';
import { message } from 'antd';

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
};

const reducer = (state: IStore, action: IAction): IStore => {
  switch (action.type) {
    case actionTypes.addMsg:
      return update(state, {
        messageArray: {
          $unshift: Array.isArray(action.payload)
            ? action.payload
            : [action.payload],
        },
      });
    default:
      return state;
  }
};

export const RoomMobile: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showNotice, setShowNotice] = useState(false);
  const [isLiving, setIsLiving] = useState(false);
  const [messageValue, setMessageValue] = useState('');
  /**
   * 注：由于大部分浏览器都必须在用户主动触发事件之后才能播媒体
   * 所以这里设置一个需要点击的地方
   * 当正在直播&&刷新进入时（这个应用进入此页面只能push，所以replace说明刷新了）
   * 显示一个按钮让用户点一下
   **/
  const [needUserClick, setNeedUserClick] = useState(false);

  useEffect(() => {
    const clipboard = new Clipboard('.share');
    clipboard.on('success', () => {
      message.success('播放地址已复制到剪贴板');
    });
    return () => {
      clipboard.destroy();
    };
  }, []);

  const noticeClickHandler = () => {
    setShowNotice(!showNotice);
  };

  const sendComment: React.KeyboardEventHandler<HTMLInputElement> = (event) => {

  };

  const leaveRoom = () => {

  };

  const addMsgItem = (messageItem: Message) => {

  };

  const setMessageArray = (msgs: Message[]) => {
    dispatch({
      type: actionTypes.addMsg,
      payload: msgs,
    });
  };

  const userStartPlay = () => {
    setNeedUserClick(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.playerContainer}>
        <div
          className={`${styles.player} ${
            !isLiving || needUserClick ? 'hidden' : ''
          }`}
          id="player"
        />
      </div>
      <div className={styles.liveContainer}>
        <div className={styles.top}>
          <div className={styles.roomInfoContainer}>
            <div className={styles.roomInfo}>
              <div className={styles.avatar}/>
              <div className={styles.info}>
                <div className={styles.title}>{state.roomDetail.title}</div>
                <div className={styles.data}>
                  <span>{state.roomDetail.onlineCount}观看</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.close} onClick={leaveRoom}>
            X
          </div>
        </div>
        <div className={styles.interaction}>
          <div className={styles.chatWindow}>
            {
              state.messageArray.map((data, index) => (
                <div className={styles.chatItem} key={index}>
                  <span className={styles.emphasize}>{data.nickname ? data.nickname + '：' : ''}</span>
                  <span dangerouslySetInnerHTML={{ __html: data.content }}></span>
                </div>
              ))
            }
            <div
              className={`${styles.chatItem} ${styles.chatItemNotice}`}
            >
              欢迎大家来到直播间！直播间内严禁出现违法违规、低俗色情、吸烟酗酒等内容，若有违规行为请及时举报。
            </div>
          </div>
          <div className={styles.operations}>
            <input
              type="text"
              className={styles.chatInput}
              placeholder="和主播说点什么..."
              onKeyDown={sendComment}
              value={messageValue}
              onChange={(e) => setMessageValue(e.target.value)}
            />
            <div
              className={`${styles.operationBtn} share`}
              data-clipboard-text={window.location.href}
            >
              <img
                src="https://img.alicdn.com/imgextra/i2/O1CN01NVOoJY24njpn5Zinn_!!6000000007436-55-tps-37-38.svg"
                alt="icon-share"
              />
            </div>
          </div>
        </div>
      </div>
      {
        !isLiving && (
          <div className={styles.noLive}>
            <img
              src="https://img.alicdn.com/imgextra/i1/O1CN01pgziS925R7tXtb86t_!!6000000007522-55-tps-238-127.svg"
              alt="no-live"
            />
            <span>主播正在路上，请稍等～</span>
          </div>
        )
      }
      {
        needUserClick && isLiving && (
          <button className={styles.needClickBtn} onClick={userStartPlay}>
            开始观看
          </button>
        )
      }
    </div>
  );
};
