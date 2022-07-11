export interface BrowserReport {
  osName: string;
  osVersion: string;
  browserName: string;
  browserVersion: string;
}

export interface PlayerSupport {
  peerConnection: boolean;
  H264: boolean;
  getStats: boolean;
}

export interface PullStreamRequestBody {
  streamurl: string;
  clientip: string;
  sdp: string;
}

export interface PullStreamResponseBody {
  code: number;
  msg: string;
  sessionid: string;
  sdp: string;
}

export type LogLevel = 'disable' | 'error' | 'warning' | 'debug' | 'log';

export interface SDKLogInfo {
  time: string;
  level: LogLevel;
  msg: string;
  id: string;
}

export interface Config {
  className?: string;
  width?: string;
  height?: string;
  objectFit?: string;
  volumn?: number;
  controls?: boolean;
  playsinline?: boolean;
  audioOnly?: boolean;
}

export interface StatReport {
  audioBitrate: number;
  videoBitrate: number;
  frameWidth: number;
  frameHeight: number;
  frameRate: number;
}

export interface SDKError {
  code: 20001 | 20002 | 20003 | 20004 | 20005 | 20006 | 30001;
  errorType: 'networkError' | 'authFailed' | 'playStreamNotExist' | 'playRequestFailed' | 'descriptionError' | 'connectFailed' | 'rtcNotSupport';
  msg: string;
}

export enum PlayerState {
  STATE_IDLE = 0,
  STATE_INIT = 1,
  STATE_READY = 2,
  STATE_PLAYING = 3,
  STATE_STOP = 4,
  STATE_ERROR = 5
}
