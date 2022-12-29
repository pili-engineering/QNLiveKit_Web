import Mock from 'better-mock';

import {
	AdminApi,
	GetAdminCensorConfigParams,
	GetAdminCensorConfigResult,
	GetAdminCensorLiveParams,
	GetAdminCensorLiveResult,
	GetAdminCensorRecordParams,
	GetAdminCensorRecordResult,
	GetServerAuthAdminTokenParams,
	mockRequest,
	PostAdminCensorAuditParams,
	PostAdminCensorConfigParams,
	PostAdminCensorStopliveLiveIdParams,
	PostManagerLoginParams
} from '@/api';

export class MockApi {
	/**
	 * 服务端获取管理员token
	 * @param params
	 */
	static getServerAuthAdminToken(params: GetServerAuthAdminTokenParams) {
		return AdminApi.getServerAuthAdminToken(params);
	}

	/**
	 * 强制关闭直播间
	 * @param params
	 */
	static postAdminCensorStopliveLiveId(
		params: PostAdminCensorStopliveLiveIdParams
	) {
		return AdminApi.postAdminCensorStopliveLiveId(params);
	}

	/**
	 * 修改审核设置信息
	 * @param params
	 */
	static postAdminCensorConfig(params: PostAdminCensorConfigParams) {
		return this.getAdminCensorConfig().then((result) => result);
	}

	/**
	 * 获取审核设置信息
	 * @param params
	 */
	static getAdminCensorConfig(params?: GetAdminCensorConfigParams) {
		return mockRequest<GetAdminCensorConfigResult['data']>(
			Mock.mock({
				enable: '@boolean',
				pulp: '@boolean',
				terror: '@boolean',
				politician: '@boolean',
				ads: '@boolean',
				interval: '@integer(1, 60)'
			})
		);
	}

	/**
	 * 审核图片
	 * @param params
	 */
	static postAdminCensorAudit(params: PostAdminCensorAuditParams) {
		return AdminApi.postAdminCensorAudit(params);
	}

	/**
	 * 查看待审核直播间/已审核直播间
	 * @param params
	 */
	static getAdminCensorLive(params: GetAdminCensorLiveParams) {
		console.log('getCensorLive params', params);
		const total = 100;
		const current = Number(params.page_num);
		const pageSize = Number(params.page_size);
		const last = Math.ceil(total / pageSize);
		const count =
			current === last && total % pageSize !== 0 ? total % pageSize : pageSize;
		const page_total =
			total % pageSize === 0
				? total / pageSize
				: Math.floor(total / pageSize) + 1;
		const list = Mock.mock({
			[`list|${count}`]: [
				{
					live_id: '@id',
					title: '@ctitle(5, 10)',
					anchor_id: '@id',
					nick: '@cname',
					anchor_status: '@integer(0, 1)',
					live_status: '@integer(0, 2)',
					stop_reason: '@ctitle(5, 10)',
					stop_at: '@datetime',
					start_at: '@datetime',
					count: '@integer(0, 100)',
					violation_count: '@integer(0, 100)',
					time: '@datetime',
					push_url: '@url',
					rtmp_play_url: '@url',
					flv_play_url: '@url',
					hls_play_url: '@url'
				}
			]
		});
		const mockList = {
			list: list.list.map(
				(
					item: Required<
						Required<GetAdminCensorLiveResult>['data']
					>['list'][number]
				) => {
					return {
						...item,
						time: item.time ? new Date(item.time).getTime() : null,
						start_at: item.start_at ? new Date(item.start_at).getTime() : null,
						stop_at: item.stop_at ? new Date(item.stop_at).getTime() : null
					};
				}
			)
		};
		return mockRequest<GetAdminCensorLiveResult['data']>({
			total_count: total,
			page_total,
			end_page: current === last,
			...mockList
		});
	}

	/**
	 * 查看待审核图片/已审核图片详情
	 * @param params
	 */
	static getAdminCensorRecord(params: GetAdminCensorRecordParams) {
		console.log('getAdminCensorRecord params', params);
		const total = 98;
		const current = Number(params.page_num);
		const pageSize = Number(params.page_size);
		const next = current + 1;
		const last = Math.ceil(total / pageSize);
		const count =
			current === last && total % pageSize !== 0 ? total % pageSize : pageSize;
		const page_total =
			total % pageSize === 0
				? total / pageSize
				: Math.floor(total / pageSize) + 1;
		const list = Mock.mock({
			[`list|${count}`]: [
				{
					id: '@id',
					url: '@image("200x100")',
					job_id: '@id',
					created_at: '@datetime',
					'suggestion|1': ['review', 'block', 'pass'],
					'pulp|1': ['review', 'block', 'pass'],
					'terror|1': ['review', 'block', 'pass'],
					'politician|1': ['review', 'block', 'pass'],
					'ads|1': ['review', 'block', 'pass'],
					live_id: '@id',
					is_review: '@integer(0, 1)',
					review_answer: '@integer(1, 2)',
					review_user_id: '@id',
					review_time: '@datetime'
				}
			]
		});
		const mockList = {
			list: list.list.map(
				(
					item: Required<
						Required<GetAdminCensorRecordResult>['data']
					>['list'][number]
				) => {
					return {
						...item,
						created_at: item.created_at
							? new Date(item.created_at).getTime()
							: null,
						review_time: item.review_time
							? new Date(item.review_time).getTime()
							: null
					};
				}
			)
		};
		return mockRequest<GetAdminCensorRecordResult['data']>({
			total_count: total,
			page_total,
			end_page: current === last,
			...mockList
		});
	}

	/**
	 * 管理员登录
	 * @param params
	 */
	static postManagerLogin(params: PostManagerLoginParams) {
		return AdminApi.postManagerLogin(params);
	}
}
