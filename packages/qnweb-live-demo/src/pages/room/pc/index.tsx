import { Button,Input, message } from 'antd';
import classNames from 'classnames';
import Clipboard from 'clipboard';
import React, { useEffect,useRef } from 'react';

import { nextPlayerTypeMap, playerTypeMap, RoomProps } from '../_types';
import styles from './index.module.scss';

export const RoomPC: React.FC<RoomProps & {
  onMessageValueKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
}> = (props) => {
  const {
    playLoading,
    isPlaying = false, playBtnVisible = true,
    playerType = 'flv.js',
    roomInfo, messages = [], messageValue,
    onMessageValueChange, onSendComment, onPlay,
    onMessageValueKeyDown, onPlayerChange
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

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.playerContainer}>
          <div className={styles.playerHeader}>
            <div className={styles.liveInfo}>
              <div className={styles.avatar}>
                <img src={roomInfo?.anchor_info?.avatar} alt="avatar"/>
              </div>
              <div className={styles.infoMain}>
                <div className={styles.title}>
                  {roomInfo?.title || '直播间'}
                </div>
                <div className={styles.data}>
                  <div className={styles.dataItem}>
                    <svg className="icon" aria-hidden="true">
                      <use xlinkHref="#icon-ic_header_guankan"></use>
                    </svg>
                    {roomInfo?.online_count || 0}
                  </div>
                  <div
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.playerMain}>
            {
              !isPlaying && <div
                className={styles.noLive}
                style={{
                  backgroundImage: `url(${roomInfo?.cover_url})`
                }}
              >
                {
                  playBtnVisible && <Button loading={playLoading} type="primary" onClick={onPlay}>
                    {playLoading ? '加载中...' : '点击播放'}
                  </Button>
                }
              </div>
            }
            {
              playerType === 'qn-rtplayer-web' ? <div
                id="player"
                className={classNames({
                  hidden: !isPlaying
                }, styles.player)}
              /> : null
            }
            {
              playerType === 'flv.js' ? <video
                id="player"
                className={classNames({
                  hidden: !isPlaying
                }, styles.player)}
              /> : null
            }
            <Button
              className={styles.playerChangeBtn}
              type="primary"
              disabled={playLoading}
              onClick={() => onPlayerChange?.(nextPlayerTypeMap[playerType])}
            >
              <div>点击切换播放器</div>
              <div>当前播放器：{playerTypeMap[playerType]}</div>
            </Button>
          </div>
          <div className={styles.playerFooter}/>
        </div>
        <div className={styles.chatContainer}>
          <div className={styles.chatMain} ref={chatMainEl}>
            {
              roomInfo?.notice ? <div className={`${styles.chatItem} ${styles.chatItemNotice}`}>
                {roomInfo?.notice}
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
        </div>
      </div>
    </div>
  );
};
