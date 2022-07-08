import { UA } from '@/utils';
import { RoomPC } from './pc';
import { RoomMobile } from './mobile';

export const Room = () => {
  return UA.isPC ? <RoomPC/> : <RoomMobile/>;
};
