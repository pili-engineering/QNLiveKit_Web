import { useEffect, useState } from 'react';
import { QNRTPlayer } from 'qn-rtplayer-web';

import { Config, PlayerState, SDKError, StatReport } from '../_types';

export interface UseQNRTPlayerProps {
  url?: string;
  container?: HTMLElement | null;
  initConfig?: Config;
}

export const useQNRTPlayer = (props?: UseQNRTPlayerProps | null) => {
  const [player, setPlayer] = useState<QNRTPlayer | null>(null);
  const [playerState, setPlayerState] = useState<PlayerState>(PlayerState.STATE_IDLE);
  const [statReport, setStatReport] = useState<StatReport | null>(null);
  const [error, setError] = useState<SDKError | null>(null);

  /**
   * 初始化播放器
   */
  useEffect(() => {
    if (!props) return;
    const { url, container, initConfig } = props;
    if (!url || !container) {
      return;
    }
    const player = new QNRTPlayer();
    const config = initConfig || {};
    player.init(config);
    setPlayer(player);
  }, [props?.url, props?.container, props?.initConfig]);

  /**
   * 事件监听
   */
  useEffect(() => {
    if (player) {
      /**
       * 播放器内部状态改变时，会触发该事件。
       * @param state
       */
      const handlePlayerStateChanged = (state: PlayerState) => {
        setPlayerState(state);
      };
      /**
       * 监听 stats 事件，可以获得当前媒体流的状态数据。
       * @param data
       */
      const handleStats = (data: StatReport) => {
        setStatReport(data);
      };
      /**
       * SDK 内部对常见的错误进行了封装，可以通过监听 error 事件获取错误信息。
       * 当连接因网络等原因异常断开时，会触发 disconnect 事件。
       * @param error
       */
      const handleError = (error: SDKError) => {
        setError(error);
      };
      player.on('playerStateChanged', handlePlayerStateChanged);
      player.on('stats', handleStats);
      player.on('error', handleError);
      return () => {
        player.off('playerStateChanged', handlePlayerStateChanged);
        player.off('stats', handleStats);
        player.off('error', handleError);
      };
    }
  }, [player]);

  return {
    player,
    playerState,
    statReport,
    error,
  };
};
