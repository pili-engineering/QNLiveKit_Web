import { useInfiniteScroll } from 'ahooks';
import { Empty, Spin } from 'antd';
import classNames from 'classnames';
import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useHistory } from 'react-router-dom';

import { GetLiveRoomListResult, LiveApi } from '@/api';
import { RoomCard } from '@/components';
import { roomStatusAdapter } from '@/utils';

import styles from './index.module.scss';

/**
 * 房间列表
 * @constructor
 */
export const RoomList = () => {
	const history = useHistory();
	const { loading, loadingMore, data, noMore, loadMoreAsync } =
		useInfiniteScroll<GetLiveRoomListResult['data']>(
			(result) => {
				const page = result?.nextId || 1;
				return LiveApi.getRoomList({
					page_num: `${page}`,
					page_size: '10'
				}).then((result) => {
					return {
						...result.data,
						nextId: page + 1
					};
				});
			},
			{
				isNoMore: (result) => Boolean(result?.end_page)
			}
		);

	return (
		<div className={styles.page}>
			{!loading && !data?.list.length ? (
				<Empty className={styles.pageEmpty} />
			) : (
				<InfiniteScroll
					dataLength={data?.list.length || 0}
					next={loadMoreAsync}
					hasMore={!noMore}
					loader={
						loading || loadingMore ? (
							<div
								className={classNames({
									[styles.loading]: loading,
									[styles.loadingMore]: loadingMore
								})}
							>
								<Spin tip="loading..." />
							</div>
						) : null
					}
					endMessage={<div className={styles.noMore}>没有更多了...</div>}
				>
					<div className={styles.list}>
						{data?.list.map((item) => {
							return (
								<RoomCard
									className={styles.listItem}
									key={item.live_id}
									title={item.title}
									subTitle={item.anchor_info.nick}
									cover={item.cover_url}
									onlineCount={item.online_count}
									status={roomStatusAdapter({
										liveStatus: item.live_status,
										anchorStatus: item.anchor_status
									})}
									trailerTime={item.start_time * 1000}
									onClick={() =>
										history.push(`/live-room?liveId=${item.live_id}`)
									}
								/>
							);
						})}
					</div>
				</InfiniteScroll>
			)}
		</div>
	);
};
