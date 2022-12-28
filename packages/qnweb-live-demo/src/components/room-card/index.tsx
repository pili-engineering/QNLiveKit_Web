import './index.scss';

import classNames from 'classnames';
import moment from 'moment';
import React, { MouseEventHandler } from 'react';

import { LiveAnimation } from '..';
import { IconUserCountSvg } from '../_images';
import { createPrefixCls } from '../_utils';

export interface RoomCardProps {
	className?: string;
	style?: React.CSSProperties;
	/**
	 * 封面图
	 */
	cover?: string;
	/**
	 * 标题
	 */
	title?: string;
	/**
	 * 子标题
	 */
	subTitle?: string;
	/**
	 * 在线人数
	 * @default 0
	 */
	onlineCount?: number;
	/**
	 * 状态
	 * @default 'live'
	 */
	status?: 'live' | 'pause' | 'trailer';
	/**
	 * 预告时间
	 * @description 单位: 毫秒
	 */
	trailerTime?: number;
	/**
	 * 点击卡片
	 */
	onClick?: MouseEventHandler<HTMLDivElement>;
}

const prefixCls = createPrefixCls('room-card');

/**
 * 房间卡片
 * @param props
 * @constructor
 */
export const RoomCard: React.FC<RoomCardProps> = (props) => {
	const {
		className,
		style,
		cover,
		title,
		subTitle,
		onlineCount = 0,
		status = 'live',
		trailerTime,
		onClick
	} = props;

	return (
		<div
			className={classNames(prefixCls, className)}
			style={style}
			onClick={onClick}
		>
			<div className={`${prefixCls}-cover`}>
				{cover ? (
					<img className={`${prefixCls}-cover-img`} src={cover} alt={cover} />
				) : null}
			</div>

			<div className={`${prefixCls}-content`}>
				<div
					className={classNames(
						`${prefixCls}-content-tip`,
						`${prefixCls}-content-tip-${status}`
					)}
				>
					{status === 'live' ? <LiveAnimation /> : null}
					{status === 'pause' ? '已暂停' : null}
					{status === 'trailer'
						? `预告：${moment(trailerTime).format('YYYY/MM/DD HH:mm')}`
						: null}
				</div>
				<div className={`${prefixCls}-content-footer`}>
					<div className={`${prefixCls}-content-footer-context`}>{title}</div>
					<div className={`${prefixCls}-content-footer-context`}>
						<span className={`${prefixCls}-content-footer-context-subtitle`}>
							{subTitle}
						</span>
						<span className={`${prefixCls}-content-footer-context-icon`}>
							<img
								className={`${prefixCls}-content-footer-context-icon-hc`}
								src={IconUserCountSvg}
								alt="iconHC"
							/>
							<span>{onlineCount}</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
