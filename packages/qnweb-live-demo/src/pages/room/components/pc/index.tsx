import React, { useRef, useEffect } from 'react';
import { message, Input, Button } from 'antd';
import Clipboard from 'clipboard';
import classNames from 'classnames';

import { RoomProps } from '../_types';

import styles from './index.module.scss';

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
    id="share"
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

export const RoomPC: React.FC<RoomProps & {
  onMessageValueKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
}> = (props) => {
  const {
    playLoading,
    isPlaying = false, playBtnVisible = true,
    roomDetail, messages = [], messageValue,
    onMessageValueChange, onSendComment, onPlay,
    onMessageValueKeyDown
  } = props;
  const chatMainEl = useRef<HTMLDivElement>(null);

  /**
   * 初始化复制器
   */
  useEffect(() => {
    const clipboard = new Clipboard('#share');
    clipboard.on('success', () => {
      message.success('播放地址已复制到剪贴板');
    });
    return () => {
      clipboard.destroy();
    };
  }, []);

  /**
   * 滚动到底部
   */
  useEffect(() => {
    const chatGoBottom = () => {
      const scrollHeight = chatMainEl.current?.scrollHeight || 0;
      const clientHeight = chatMainEl.current?.clientHeight || 0;
      chatMainEl.current?.scrollTo(0, scrollHeight - clientHeight);
    };
    chatGoBottom();
  }, [messages]);

  /**
   * 播放器
   */
  const renderPlayerContainer = () => {
    return <div className={styles.playerContainer}>
      <div className={styles.playerHeader}>
        <div className={styles.liveInfo}>
          <div className={styles.avatar}>
            <img src={roomDetail?.avatar} alt="avatar"/>
          </div>
          <div className={styles.infoMain}>
            <div className={styles.title}>
              {roomDetail?.title || '直播间'}
            </div>
            <div className={styles.data}>
              {renderIconOnlineCount(roomDetail?.onlineCount || 0)}
              {renderIconShare()}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.playerMain}>
        {
          !isPlaying && <div
            className={styles.noLive}
            style={{
              backgroundImage: `url(${roomDetail?.cover})`
            }}
          >
            {
              playBtnVisible && <Button loading={playLoading} type="primary" onClick={onPlay}>
                {playLoading ? '加载中...' : '点击播放'}
              </Button>
            }
          </div>
        }
        <div
          id="player"
          className={classNames({
            hidden: !isPlaying
          }, styles.player)}
        />
      </div>
      <div className={styles.playerFooter}/>
    </div>;
  };

  /**
   * im聊天
   */
  const renderChatContainer = () => {
    return <div className={styles.chatContainer}>
      <div className={styles.chatMain} ref={chatMainEl}>
        {
          roomDetail && roomDetail.notice ? <div className={`${styles.chatItem} ${styles.chatItemNotice}`}>
            {roomDetail?.notice}
          </div> : null
        }
        {
          messages.map((data, index) => (
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
          value={messageValue}
          placeholder="和主播说点什么..."
          onChange={(e) => onMessageValueChange(e.target.value)}
          onKeyDown={onMessageValueKeyDown}
        />
        <Button type="primary" onClick={onSendComment}>发送</Button>
      </div>
    </div>;
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {renderPlayerContainer()}
        {renderChatContainer()}
      </div>
    </div>
  );
};
