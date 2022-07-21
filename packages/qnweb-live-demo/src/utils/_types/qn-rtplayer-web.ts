export interface QNRtPlayerBrowserReport {
  osName: string;
  osVersion: string;
  browserName: string;
  browserVersion: string;
}

export interface QNRtPlayerPlayerSupport {
  peerConnection: boolean;
  H264: boolean;
  getStats: boolean;
}

export interface QNRtPlayerPullStreamRequestBody {
  streamurl: string;
  clientip: string;
  sdp: string;
}

export interface QNRtPlayerPullStreamResponseBody {
  code: number;
  msg: string;
  sessionid: string;
  sdp: string;
}

export type QNRtPlayerLogLevel = 'disable' | 'error' | 'warning' | 'debug' | 'log';

export interface QNRtPlayerSDKLogInfo {
  time: string;
  level: QNRtPlayerLogLevel;
  msg: string;
  id: string;
}

export interface QNRtPlayerConfig {
  className?: string;
  width?: string;
  height?: string;
  objectFit?: string;
  volumn?: number;
  controls?: boolean;
  playsinline?: boolean;
  audioOnly?: boolean;
}

export interface QNRtPlayerStatReport {
  audioBitrate: number;
  videoBitrate: number;
  frameWidth: number;
  frameHeight: number;
  frameRate: number;
}

export interface QNRtPlayerSDKError {
  code: 20001 | 20002 | 20003 | 20004 | 20005 | 20006 | 30001;
  errorType: 'networkError' | 'authFailed' | 'playStreamNotExist' | 'playRequestFailed' | 'descriptionError' | 'connectFailed' | 'rtcNotSupport';
  msg: string;
}

export enum QNRtPlayerPlayerState {
  STATE_IDLE = 0,
  STATE_INIT = 1,
  STATE_READY = 2,
  STATE_PLAYING = 3,
  STATE_STOP = 4,
  STATE_ERROR = 5
}
