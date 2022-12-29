import React, { Fragment } from 'react';
import { Card, Checkbox, Image, Tooltip } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import classNames from 'classnames';
import moment from 'moment';

import './index.scss';

const prefixCls = 'audit-image-card';

export interface AuditImageCardProps {
	/**
	 * 截图的时间
	 */
	createdAt?: number | null;
	/**
	 * 图片url
	 */
	url?: string;
	/**
	 * 是否显示多选框
	 */
	checkboxVisible?: boolean;
	/**
	 * 是否已选择
	 */
	checked?: boolean;
	/**
	 * 遮罩
	 */
	cover?: string | null;
	/**
	 * 标签
	 */
	tags?: {
		label: string;
		value: 'review' | 'block' | 'pass';
	}[];
	/**
	 * 选择状态发生变化
	 * @param e
	 */
	onChange?: (e: CheckboxChangeEvent) => void;
}

export const AuditImageCard: React.FC<AuditImageCardProps> = (props) => {
	const {
		createdAt,
		url,
		checkboxVisible = true,
		checked = false,
		cover,
		tags = [],
		onChange
	} = props;

	const tooltipTitle = tags
		.map((item) => {
			const { label, value } = item;
			return value === 'review' ? `疑似${label}` : label;
		})
		.join('，');

	return (
		<Card
			className={classNames(prefixCls, {
				[`${prefixCls}-checked`]: checked
			})}
			bodyStyle={{ padding: 0 }}
			cover={cover && <div className={`${prefixCls}-cover`}>{cover}</div>}
		>
			<div className={`${prefixCls}-body`}>
				<Tooltip
					title={
						createdAt ? moment(createdAt).format('YYYY-MM-DD HH:mm:ss') : null
					}
				>
					<Image className={`${prefixCls}-image`} src={url} />
				</Tooltip>
				{checkboxVisible && (
					<Checkbox
						checked={checked}
						onChange={onChange}
						className={`${prefixCls}-checkbox`}
					>
						<Tooltip title={tooltipTitle}>
							<div className={`${prefixCls}-checkbox-label`}>
								{tags.map((item, index) => {
									const isTail = index + 1 >= tags.length;
									return (
										<Fragment key={index}>
											<span
												className={`${prefixCls}-checkbox-label-item-${item.value}`}
											>
												{item.value === 'review' && <span>疑似</span>}
												<span>{item.label}</span>
											</span>
											{!isTail && <span>，</span>}
										</Fragment>
									);
								})}
							</div>
						</Tooltip>
					</Checkbox>
				)}
			</div>
		</Card>
	);
};
