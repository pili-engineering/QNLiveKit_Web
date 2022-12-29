import React from 'react';
import { Button, Table, TableProps, Tooltip } from 'antd';
import classNames from 'classnames';
import moment from 'moment';

import './index.scss';

export type BasicTableDataType = {
	/**
	 * 唯一key
	 */
	id: string;
	/**
	 * 直播间名
	 */
	title: string;
	/**
	 * 主播
	 */
	host: string;
	/**
	 * 当前状态
	 * pending: 准备中,living: 直播中, stepOut: 暂时离开, finished: 已结束, forceClosed: 已强制关闭, unknown: 未知
	 */
	status:
		| 'pending'
		| 'living'
		| 'stepOut'
		| 'finished'
		| 'forceClosed'
		| 'unknown';
	/**
	 * 待审核记录
	 */
	todoRecords: number;
	/**
	 * 最近一次预警时间
	 */
	lastWarningTime: number;
	/**
	 * AI预警次数
	 */
	aiWarningCount: number;
	/**
	 * 违规次数
	 */
	illegalCount: number;
	[key: string]: any;
};

export type BasicTableProps = {
	/**
	 * 点击查看详情
	 * @param data
	 */
	onDetailClick?: (data: BasicTableDataType) => void;
	/**
	 * 过滤列
	 */
	filterColumns?: string[];
} & TableProps<BasicTableDataType>;

const prefixCls = 'basic-table';

const mapStatus: {
	[key in Required<BasicTableDataType>['status']]: string;
} = {
	pending: '已创建',
	living: '直播中',
	stepOut: '暂时离开',
	finished: '已结束',
	forceClosed: '已强制关闭',
	unknown: '未知'
};

export const BasicTable: React.FC<BasicTableProps> = (props) => {
	const { className, filterColumns, pagination, onDetailClick, ...restProps } =
		props;

	const columns: BasicTableProps['columns'] = [
		{
			title: '直播间',
			dataIndex: 'title',
			key: 'title',
			render: (text) => (
				<Tooltip className={`${prefixCls}-title`} title={text}>
					{text.length > 10 ? `${text.slice(0, 10)}...` : text}
				</Tooltip>
			)
		},
		{ title: '主播', dataIndex: 'host', key: 'host' },
		{
			title: '当前状态',
			dataIndex: 'status',
			key: 'status',
			render: (_, row) => {
				const { status } = row;
				const statusCls = classNames(`${prefixCls}-status`, {
					[`${prefixCls}-status-${status}`]: status
				});
				return (
					<span className={statusCls}>{mapStatus[status || 'unknown']}</span>
				);
			}
		},
		{ title: '待审核记录', dataIndex: 'todoRecords', key: 'todoRecords' },
		{
			title: '最近一次预警时间',
			dataIndex: 'lastWarningTime',
			key: 'lastWarningTime',
			render: (value) =>
				value ? moment(value).format('YYYY-MM-DD HH:mm:ss') : '-'
		},
		{
			title: 'AI预警次数',
			dataIndex: 'aiWarningCount',
			key: 'aiWarningCount',
			render: (value) => value || 0
		},
		{
			title: '违规次数',
			dataIndex: 'illegalCount',
			key: 'illegalCount',
			render: (value) => value || 0
		},
		{
			title: '操作',
			key: 'action',
			align: 'center',
			render: (_, row) => {
				return row.status !== 'pending' ? (
					<Button type="link" onClick={() => onDetailClick?.(row)}>
						查看详情
					</Button>
				) : (
					'-'
				);
			}
		}
	];

	return (
		<Table
			className={classNames(prefixCls, className)}
			columns={columns.filter((item) =>
				filterColumns?.includes(item.key as string)
			)}
			rowKey="id"
			pagination={{
				showSizeChanger: false,
				...pagination
			}}
			{...restProps}
		/>
	);
};
