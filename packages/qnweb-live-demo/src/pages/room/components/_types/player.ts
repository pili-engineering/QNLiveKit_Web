import { PlayerType } from '@/pages/room/components';

export const playerTypeMap = {
  'flv.js': 'FLV播放器',
  'qn-rtplayer-web': '七牛低延时直播播放器'
};

export const nextPlayerTypeMap: {
  [key in PlayerType]: PlayerType
} = {
  'flv.js': 'qn-rtplayer-web',
  'qn-rtplayer-web': 'flv.js'
};
