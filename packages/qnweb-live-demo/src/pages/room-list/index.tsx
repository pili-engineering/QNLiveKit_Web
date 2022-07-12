import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useInfiniteScroll } from 'ahooks';
import { Spin } from 'antd';

import { GetLiveRoomListResult, LiveApi } from '@/api';

import styles from './index.module.scss';

type Data = GetLiveRoomListResult['data'] & {
  nextId: number;
}

function getLoadMoreList(nextId: number, limit: number): Promise<Data> {
  const page = nextId || 1;
  return LiveApi.getRoomList({
    page_num: `${page}`,
    page_size: `${limit}`,
  }).then(result => {
    return {
      ...result.data,
      nextId: page + 1
    };
  });
}

export const RoomList = () => {
  const history = useHistory();
  const ref = useRef<HTMLDivElement>(null);
  const { data, loadingMore, noMore } = useInfiniteScroll<Data>(
    d => getLoadMoreList(d?.nextId, 10),
    {
      target: ref,
      isNoMore: (d) => Boolean(d?.end_page),
    },
  );

  useEffect(() => {
    const handleResize = () => {
      const ele = ref.current;
      if (!ele) {
        return;
      }
      ele.style.width = `${document.body.clientWidth}px`;
      ele.style.height = `${document.body.clientHeight}px`;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onEnterRoom = (roomId: string) => {
    history.push(`/room?roomId=${roomId}`);
  };

  const list = data?.list || [];

  return (
    <Spin spinning={loadingMore} tip="加载更多中...">
      <div
        className={styles.page}
        style={{ width: document.body.clientWidth, height: document.body.clientHeight }}
        ref={ref}
      >
        {
          list.length ? <div
            className={styles.listContainer}
          >
            <div className={styles.list}>
              {
                list.map((item) => (
                  <div
                    className={styles.listItem}
                    style={{ backgroundImage: `url(${item.cover_url}` }}
                    key={item.live_id}
                    onClick={() => onEnterRoom(item.live_id)}
                  >
                    <div className={styles.itemInner}>
                      <div className={styles.online}>{item.online_count}人在线</div>
                      <div className={styles.infoContainer}>
                        <div className={styles.avatar} style={{ backgroundImage: `url(${item.anchor_info.avatar})` }}/>
                        <div className={styles.info}>
                          <div className={styles.title}>{item.title}</div>
                          <div className={styles.id}>ID：{item.anchor_info.user_id}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            {noMore && <div className={styles.noMore}>没有更多了...</div>}
          </div> : <div className={styles.empty}>
            <div className={styles.emptyIcon}>
              <svg width="64" height="41" viewBox="0 0 64 41"
                   xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(0 1)" fill="none" fillRule="evenodd">
                  <ellipse className="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7"></ellipse>
                  <g className="ant-empty-img-simple-g" fillRule="nonzero">
                    <path
                      d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                    <path
                      d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                      className="ant-empty-img-simple-path"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className={styles.emptyDescription}>暂无数据</div>
          </div>
        }
      </div>
    </Spin>
  );
};
