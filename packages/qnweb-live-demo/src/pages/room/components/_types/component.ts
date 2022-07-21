import React from 'react';

export interface RoomDetail {
  title: string;
  onlineCount: number;
  ownerId: string;
  roomId: string;
  notice: string;
  avatar: string;
  cover: string;
}

export interface Message {
  nickname: string;
  content: string;
}

export type PlayerType = 'flv.js' | 'qn-rtplayer-web';

export interface RoomProps {
  playerType: PlayerType;
  playLoading?: boolean;
  playerUrl?: string;
  playBtnVisible?: boolean;
  noticeVisible?: boolean;
  isPlaying: boolean;
  isPlayback?: boolean;
  isMuteAll?: boolean;
  isMuteSelf?: boolean;
  roomDetail?: RoomDetail | null;
  messages?: Message[];
  messageValue: string;
  onMessageValueChange: (value: string) => void;
  onNoticeVisibleChange?: (visible: boolean) => void;
  onSendComment?: React.MouseEventHandler<HTMLElement>;
  onClose?: React.MouseEventHandler<HTMLDivElement>;
  onPlay?: React.MouseEventHandler<HTMLElement>;
  onPlayerChange?: (value: PlayerType) => void;
}
