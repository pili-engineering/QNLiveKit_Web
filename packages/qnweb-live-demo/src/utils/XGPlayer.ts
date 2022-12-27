import FlvJsPlayer from 'xgplayer-flv.js';
import HlsJsPlayer from 'xgplayer-hls.js';
import Mp4Player from 'xgplayer-mp4';

export type XGPlayerConstructor = typeof HlsJsPlayer | typeof FlvJsPlayer | typeof Mp4Player;

export class XGPlayer {
  static getPlayerConstructor(url: string): XGPlayerConstructor {
    if (url.endsWith('.m3u8')) {
      return HlsJsPlayer;
    }
    if (url.endsWith('.flv')) {
      return FlvJsPlayer;
    }
    if (url.endsWith('.mp4')) {
      return Mp4Player;
    }
    throw new TypeError(`不支持的播放链接: ${url}`);
  }
}
