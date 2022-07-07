import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './index.module.scss';

interface RoomItem {
  ownerId: string;
  onlineCount: number;
  avatar: string;
  title: string;
  roomId: string;
  cover: string;
}

export const RoomList = () => {
  const history = useHistory();
  const [roomList, setRoomList] = useState<RoomItem[]>([
    {
      ownerId: 'ownerId123456ownerId123456ownerId123456ownerId123456',
      onlineCount: 22,
      avatar: 'https://img.alicdn.com/imgextra/i4/O1CN01BQZKz41EGtPZp3U5P_!!6000000000325-2-tps-1160-1108.png',
      title: 'title123title123title123title123title123',
      roomId: 'roomId123',
      cover: 'https://img.alicdn.com/imgextra/i3/O1CN01sE83c029Xm6lbhNru_!!6000000008078-2-tps-510-648.png',
    },
  ]);

  const onEnterRoom = (roomId: string) => {
    history.push(`/room?roomId=${roomId}`);
  };

  return (
    <div className={styles.page}>
      <div className={styles.roomList}>
        {
          roomList.map((item) => (
            <div
              className={styles.listItem}
              style={{ backgroundImage: `url(${item.cover}` }}
              key={item.roomId}
              onClick={() => onEnterRoom(item.roomId)}
            >
              <div className={styles.itemInner}>
                <div className={styles.online}>{item.onlineCount}人在线</div>
                <div className={styles.infoContainer}>
                  <div className={styles.avatar} style={{ backgroundImage: `url(${item.avatar})` }}/>
                  <div className={styles.info}>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.id}>ID：{item.ownerId}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
