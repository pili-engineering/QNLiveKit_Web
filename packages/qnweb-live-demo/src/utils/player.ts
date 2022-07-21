import FlvJs from 'flv.js';
import { QNRTPlayer } from 'qn-rtplayer-web';

import { QNRtPlayerPlayerState, QNRtPlayerSDKError } from './_types';

export type PlayerType = 'flv.js' | 'qn-rtplayer-web';

export interface PlayerConfig {
  type: PlayerType;
  url: string;
  element: HTMLVideoElement | HTMLElement;
}

export interface PlayerInfo {
  state: 'idle' | 'complete' | 'error';
  result: any;
}

export type InfoChangeListenerCallback = (info: PlayerInfo) => void;

/**
 * 播放器封装
 */
export class PlayerManager<T = null> {
  private readonly config: PlayerConfig;
  private player: FlvJs.Player | QNRTPlayer | null;
  private infoChangeListeners: InfoChangeListenerCallback[];

  static create<T extends PlayerType | null = null>(config: PlayerConfig) {
    return new this<PlayerType>(config);
  }

  constructor(config: PlayerConfig) {
    this.config = config;
    this.player = null;
    if (this.config.type === 'flv.js') {
      this.player = this.createFlvJsPlayer();
    }
    if (this.config.type === 'qn-rtplayer-web') {
      this.player = this.createQNRTPlayer();
    }
    this.infoChangeListeners = [];
  }

  private handleFlvJsPlayerError(error: any) {
    this.infoChangeListeners.forEach(
      listener => listener({
        state: 'error',
        result: error
      })
    );
  }

  private handleFlvJsPlayerComplete(result: any) {
    this.infoChangeListeners.forEach(
      listener => listener({
        state: 'complete',
        result: result
      })
    );
  }

  private handleRTPlayerError(error: QNRtPlayerSDKError) {
    this.infoChangeListeners.forEach(
      listener => listener({
        state: 'error',
        result: error
      })
    );
  }

  private handleRTPlayerStateChanged(state: QNRtPlayerPlayerState) {
    if (state === QNRtPlayerPlayerState.STATE_PLAYING) {
      this.infoChangeListeners.forEach(
        listener => listener({
          state: 'complete',
          result: state
        })
      );
    }
  }

  /**
   * https://github.com/bilibili/flv.js/blob/master/docs/api.md
   */
  private createFlvJsPlayer() {
    this.handleFlvJsPlayerError = this.handleFlvJsPlayerError.bind(this);
    this.handleFlvJsPlayerComplete = this.handleFlvJsPlayerComplete.bind(this);
    const player = FlvJs.createPlayer({
      type: 'flv',
      url: this.config.url,
      hasVideo: true,
      hasAudio: true,
    });
    player.on(FlvJs.Events.ERROR, this.handleFlvJsPlayerError);
    player.on(FlvJs.Events.METADATA_ARRIVED, this.handleFlvJsPlayerComplete);
    return player;
  }

  /**
   * https://developer.qiniu.com/pili/7730/geek-web-sdk
   */
  private createQNRTPlayer() {
    this.handleRTPlayerError = this.handleRTPlayerError.bind(this);
    this.handleRTPlayerStateChanged = this.handleRTPlayerStateChanged.bind(this);
    const player = new QNRTPlayer();
    player.init({});
    player.on('error', this.handleRTPlayerError);
    player.on('playerStateChanged', this.handleRTPlayerStateChanged);
    return player;
  }

  /**
   * 添加infoChange监听器
   * @param listener
   */
  addInfoChange(listener: InfoChangeListenerCallback) {
    this.infoChangeListeners = this.infoChangeListeners.concat(listener);
  }

  /**
   * 移除infoChange监听器
   * @param listener
   */
  removeInfoChange(listener: InfoChangeListenerCallback) {
    this.infoChangeListeners = this.infoChangeListeners.filter(
      item => item !== listener
    );
  }

  /**
   * 切换播放器类型
   * @param type
   */
  setType(type: PlayerType) {
    this.config.type = type;
  }

  /**
   * 获取播放器类型
   */
  getType() {
    return this.config.type;
  }

  /**
   * 播放
   */
  play() {
    const { element, url } = this.config;
    if (!element) {
      return Promise.reject(new TypeError('element is null'));
    }
    if (!this.player) {
      return Promise.reject(new TypeError('player is null'));
    }
    if (!url) {
      return Promise.reject(new TypeError('url is null'));
    }
    if (this.config.type === 'flv.js') {
      const player = this.player as FlvJs.Player;
      player.attachMediaElement(element as HTMLVideoElement);
      player.load();
      return Promise.resolve(
        player.play()
      );
    }
    if (this.config.type === 'qn-rtplayer-web') {
      return (this.player as QNRTPlayer).play(url, element);
    }
    return Promise.resolve(new TypeError('unknown player type'));
  }

  /**
   * 销毁播放器
   */
  destroy() {
    if (this.config.type === 'flv.js') {
      const player = this.player as FlvJs.Player;
      player.off(FlvJs.Events.ERROR, this.handleFlvJsPlayerError);
      player.off(FlvJs.Events.LOADING_COMPLETE, this.handleFlvJsPlayerComplete);
      player.unload();
      player.detachMediaElement();
      player.destroy();
    }
    if (this.config.type === 'qn-rtplayer-web') {
      const player = this.player as QNRTPlayer;
      player.off('error', this.handleRTPlayerError);
      player.off('complete', this.handleRTPlayerStateChanged);
      player.release();
    }
    this.infoChangeListeners = [];
    this.player = null;
  }
}
