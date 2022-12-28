import { GetAdminCensorConfigResult, GetAdminCensorLiveResult } from '@/api';
import { AuditSettingValues, BasicTableDataType } from '@/components';

/**
 * 映射前端展示的主播状态
 * @param item
 */
export const getStatus = (
	item: Required<Required<GetAdminCensorLiveResult>['data']>['list'][number]
): BasicTableDataType['status'] => {
	const { live_status, anchor_status, stop_reason } = item;
	if (live_status === 0) return 'pending';
	if (live_status === 1) return 'living';
	if (live_status === 2 && !stop_reason) return 'finished';
	if (live_status === 2 && stop_reason) return 'forceClosed';
	if (anchor_status === 0) return 'stepOut';
	return 'unknown';
};

/**
 * 设置标签数据清洗
 */
export const getSettingTags = (data: GetAdminCensorConfigResult['data']) => {
	const tags = [];
	if (data?.pulp) {
		tags.push('pulp');
	}
	if (data?.terror) {
		tags.push('terror');
	}
	if (data?.ads) {
		tags.push('ads');
	}
	if (data?.politician) {
		tags.push('politician');
	}
	return tags as AuditSettingValues['tags'];
};
