import React, { useState } from 'react';
import {
	Layout,
	Space,
	Switch,
	Radio,
	RadioChangeEvent,
	Button,
	message,
	Spin,
	Modal,
	Checkbox
} from 'antd';
import { SwitchChangeEventHandler } from 'antd/es/switch';
import { useAntdTable, useRequest } from 'ahooks';
import moment from 'moment';

import {
	PostAdminCensorConfigParams,
	PostAdminCensorConfigResult,
	AdminApi,
	GetAdminCensorLiveResult,
	PostAdminCensorAuditParams,
	PostAdminCensorAuditResult,
	PostAdminCensorStopliveLiveIdParams,
	PostAdminCensorStopliveLiveIdResult
} from '@/api';
import {
	AuditDetailModal,
	AuditDetailModalProps,
	AuditSettingModal,
	AuditSettingModalProps,
	BasicTable,
	BasicTableDataType,
	BasicTableProps
} from '@/components';
import { getSettingTags, getStatus } from './utils';
import logoPNG from './logo.png';

import styles from './index.module.scss';

const { Header, Content } = Layout;

const tableTabOpts = [
	{ label: '待审核', value: 'todo' },
	{ label: '全部直播', value: 'all' }
] as const;

type TableTabOptValue = typeof tableTabOpts[number]['value'];

const warningAlertMessage = (datetime?: number) => {
	return (
		<span style={{ color: '#EF4149' }}>
			直播间涉嫌违规，管理员于{moment(datetime).format('YYYY/MM/DD HH:mm:ss')}
			强制关闭
		</span>
	);
};

export const ContentAudit = () => {
	const [tableTab, setTableTab] = useState<TableTabOptValue>('todo');
	const [settingModalVisible, setSettingModalVisible] = useState(false);
	const [settingButtonVisible, setSettingButtonVisible] = useState(false);
	const [detailModalVisible, setDetailModalVisible] = useState(false);
	const [curRow, setCurRow] = useState<BasicTableDataType | null>();

	/**
	 * 获取直播列表
	 */
	const {
		loading: liveTableLoading,
		data: liveTableData,
		pagination: liveTablePagination,
		runAsync: runLiveTableAsync,
		refreshAsync: refreshLiveTableAsync
	} = useAntdTable<
		{
			total: number;
			list: Required<Required<GetAdminCensorLiveResult>['data']>['list'];
		},
		[
			{
				current: number;
				pageSize: number;
				tableTab: TableTabOptValue;
			}
		]
	>((params) => {
		const { current, pageSize, tableTab } = params;
		const basicParams = {
			page_num: `${current}`,
			page_size: `${pageSize}`
		};
		const paramsMap = {
			all: basicParams,
			todo: {
				...basicParams,
				is_review: '0'
			}
		};
		return AdminApi.getAdminCensorLive(paramsMap[tableTab || 'todo']).then(
			(result) => {
				console.log('getCensorLive result', result);
				return {
					list: result.data?.list || [],
					total: result.data?.total_count || 0
				};
			}
		);
	});
	/**
	 * 获取审核设置
	 */
	const {
		loading: settingConfigLoading,
		data: settingConfig,
		refresh: refreshSettingConfig
	} = useRequest(() => {
		return AdminApi.getAdminCensorConfig().then((result) => {
			console.log('getCensorConfig result', result);
			setSettingButtonVisible(!!result.data?.enable);
			return result.data;
		});
	});
	/**
	 * 修改审核设置信息
	 */
	const { loading: updateSettingLoading, runAsync: runUpdateSettingAsync } =
		useRequest<
			PostAdminCensorConfigResult['data'],
			PostAdminCensorConfigParams[]
		>(
			(params) => {
				return AdminApi.postAdminCensorConfig(params).then(
					(result) => result.data
				);
			},
			{
				manual: true
			}
		);
	/**
	 * 结束直播
	 */
	const { runAsync: runStopLiveAsync } = useRequest<
		PostAdminCensorStopliveLiveIdResult,
		[PostAdminCensorStopliveLiveIdParams]
	>(
		(params) => {
			return AdminApi.postAdminCensorStopliveLiveId(params);
		},
		{
			manual: true
		}
	);
	/**
	 * 审核
	 */
	const { runAsync: runAuditAsync } = useRequest<
		PostAdminCensorAuditResult,
		[PostAdminCensorAuditParams]
	>(
		(params) => {
			return AdminApi.postAdminCensorAudit(params);
		},
		{
			manual: true
		}
	);

	/**
	 * 直播列表数据清洗
	 */
	const basicTableDataSource: BasicTableDataType[] = (
		liveTableData?.list || []
	).map((item) => {
		return {
			live_id: item.live_id,
			id: item.live_id,
			title: item.title,
			host: item.nick,
			status: getStatus(item),
			todoRecords: item.count,
			lastWarningTime: item.time || 0,
			aiWarningCount: 0,
			illegalCount: item.violation_count,
			liveUrl: item.flv_play_url,
			liveTotalTime: moment
				.utc((item.stop_at || Date.now()) - (item.start_at || Date.now()))
				.format('HH小时mm分钟')
		};
	});

	/**
	 * tab切换
	 * @param event
	 */
	const onTabChange = (event: RadioChangeEvent) => {
		const tableTab = event.target.value;
		runLiveTableAsync({
			...liveTablePagination,
			current: 1,
			tableTab
		}).then(() => {
			setTableTab(tableTab);
		});
	};

	/**
	 * 是否开启更多设置
	 * @param checked
	 */
	const onSettingButtonVisibleChange: SwitchChangeEventHandler = (checked) => {
		return runUpdateSettingAsync({
			enable: checked,
			interval: 1,
			pulp: true
		}).then(() => {
			setSettingButtonVisible(checked);
			refreshSettingConfig();
		});
	};

	/**
	 * 点击确认修改设置
	 * @param values
	 */
	const onSettingOk: AuditSettingModalProps['onOk'] = (values) => {
		const { tags = [] } = values;
		return runUpdateSettingAsync({
			enable: settingButtonVisible,
			pulp: tags.includes('pulp'),
			terror: tags.includes('terror'),
			ads: tags.includes('ads'),
			politician: tags.includes('politician'),
			interval: values.interval
		}).then(() => {
			setSettingModalVisible(false);
			message.success('设置成功');
			refreshSettingConfig();
		});
	};

	/**
	 * 查看详情
	 */
	const onDetailClick: BasicTableProps['onDetailClick'] = (data) => {
		setDetailModalVisible(true);
		setCurRow(data);
	};

	/**
	 * 待审核/已审核请求Service
	 * @param params
	 */
	const listRequestService: AuditDetailModalProps['listRequestService'] = (
		params
	) => {
		const { current, pageSize, tab } = params;
		const basicParams = {
			page_num: `${current}`,
			page_size: `${pageSize}`,
			live_id: curRow?.live_id
		};
		const paramsMap = {
			todo: {
				...basicParams,
				is_review: '0'
			},
			done: {
				...basicParams,
				is_review: '1'
			},
			screenshotRecord: basicParams
		};
		return AdminApi.getAdminCensorRecord(paramsMap[tab]).then((result) => {
			console.log('getAdminCensorRecord result', result);
			const list = (result.data?.list || []).map((item) => {
				return {
					id: `${item.id}`,
					url: item.url,
					pulp: item.pulp,
					terror: item.terror,
					ads: item.ads,
					politician: item.politician,
					review_answer: item.review_answer,
					createdAt: item.created_at
				};
			});
			return {
				total: result.data?.total_count || 0,
				list
			};
		});
	};

	/**
	 * 结束直播
	 */
	const onEndLiveClick: AuditDetailModalProps['onEndLiveClick'] = (
		callback
	) => {
		Modal.confirm({
			icon: null,
			title: '提示',
			content: '是否强制结束直播？',
			okText: '是',
			cancelText: '否',
			onOk() {
				return runStopLiveAsync({
					live_id: curRow?.live_id
				})
					.then(() => {
						message.success('该直播间已强制关闭');
						callback?.onComplete();
						return refreshLiveTableAsync();
					})
					.then(() => {
						setCurRow(
							curRow
								? {
										...curRow,
										status: 'forceClosed'
								  }
								: null
						);
					});
			}
		});
	};
	/**
	 * 通过
	 */
	const onPassClick: AuditDetailModalProps['onPassClick'] = (
		values,
		callback
	) => {
		console.log('onPassClick', values);
		if (!values.length) {
			Modal.info({
				content: '请选择要通过的截图'
			});
			return;
		}
		const hide = message.loading('审核通过中', 0);
		return runAuditAsync({
			live_id: curRow?.live_id,
			image_list: values.map((item) => +item.id),
			review_answer: 1
		})
			.then(() => {
				message.success('审核通过');
				callback?.onComplete();
			})
			.finally(() => {
				hide();
			});
	};
	/**
	 * 违规
	 */
	const onViolationClick: AuditDetailModalProps['onViolationClick'] = (
		values,
		callback
	) => {
		console.log('onViolationClick');
		if (!values.length) {
			Modal.info({
				content: '请选择要违规的截图'
			});
			return;
		}
		Modal.confirm({
			icon: null,
			title: '提示',
			content: (
				<div className="violation-modal-content">
					<div>选中的图片将被标记为“违规”，是否继续？</div>
					<Checkbox>同时向直播间发出警告</Checkbox>
				</div>
			),
			onOk() {
				const checked = !!document.querySelector(
					'.violation-modal-content .ant-checkbox-checked'
				);
				return runAuditAsync({
					live_id: curRow?.live_id,
					image_list: values.map((item) => +item.id),
					review_answer: 2,
					notify: checked
				}).then(() => {
					callback?.onComplete();
				});
			}
		});
	};

	/**
	 * 强制关闭的直播间alert提示
	 */
	const auditDetailModalAlertProps =
		(): AuditDetailModalProps['alertProps'] => {
			if (curRow?.status !== 'forceClosed') return null;
			const forceCloseLive = liveTableData?.list.find(
				(item) => item.live_id === curRow?.live_id
			);
			const forceCloseDatetime = forceCloseLive
				? forceCloseLive.stop_at
				: Date.now();
			return {
				message: warningAlertMessage(forceCloseDatetime)
			};
		};

	/**
	 * table columns map
	 */
	const filterColumnsMap: Record<
		TableTabOptValue,
		BasicTableProps['filterColumns']
	> = {
		todo: [
			'title',
			'host',
			'status',
			'todoRecords',
			'lastWarningTime',
			'action'
		],
		all: ['title', 'host', 'status', 'aiWarningCount', 'illegalCount', 'action']
	};

	return (
		<Layout className={styles.container}>
			<AuditSettingModal
				initialValues={{
					interval: settingConfig?.interval || 1,
					tags: Array.from(
						new Set((getSettingTags(settingConfig) || []).concat('pulp'))
					)
				}}
				visible={settingModalVisible}
				okButtonLoading={updateSettingLoading}
				onCancel={() => setSettingModalVisible(false)}
				onOk={onSettingOk}
			/>
			<AuditDetailModal
				title={curRow?.title}
				status={curRow?.status}
				alertProps={auditDetailModalAlertProps()}
				livePreviewProps={{
					url: curRow?.liveUrl,
					duration: curRow?.liveTotalTime
				}}
				visible={detailModalVisible}
				illegalCount={curRow?.illegalCount}
				listRequestService={listRequestService}
				onCancel={() => setDetailModalVisible(false)}
				onEndLiveClick={onEndLiveClick}
				onPassClick={onPassClick}
				onViolationClick={onViolationClick}
			/>

			<Header className={styles.header}>
				<img width={36} height={36} src={logoPNG} alt="logo" />
				<span className={styles.title}>低代码互动直播</span>
			</Header>

			<Layout className={styles.main}>
				<h3 className={styles.title}>内容审核</h3>
				<Content className={styles.content}>
					<div className={styles.context}>
						<Space size={30}>
							<span>开启直播审核</span>
							<Space size={14}>
								<Switch
									loading={settingConfigLoading || updateSettingLoading}
									checked={settingButtonVisible}
									onChange={onSettingButtonVisibleChange}
								/>
								{settingButtonVisible && (
									<Button
										className={styles.more}
										type="link"
										loading={settingConfigLoading || updateSettingLoading}
										onClick={() => setSettingModalVisible(true)}
									>
										更多设置
									</Button>
								)}
							</Space>
						</Space>
					</div>

					<Spin spinning={liveTableLoading}>
						<div className={styles.context}>
							<Radio.Group value={tableTab} onChange={onTabChange}>
								{tableTabOpts.map(({ label, value }) => (
									<Radio.Button key={value} value={value}>
										{label}
									</Radio.Button>
								))}
							</Radio.Group>
						</div>
						<BasicTable
							dataSource={basicTableDataSource}
							pagination={liveTablePagination}
							onDetailClick={onDetailClick}
							filterColumns={filterColumnsMap[tableTab]}
						/>
					</Spin>
				</Content>
			</Layout>
		</Layout>
	);
};
