import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import { IconRewardGiftSvg } from '../_images';
import { createPrefixCls } from '../_utils';

import './index.scss';

export interface MorePanelItem {
	/**
	 * 名称
	 */
	id: string;
	/**
	 * 图片
	 */
	img: string;
	/**
	 * 标题
	 */
	title: string;
}

export interface MorePanelProps {
	className?: string;
	style?: React.CSSProperties;
	/**
	 * 是否可见
	 */
	visible?: boolean;
	/**
	 * 标题
	 */
	title: string;
	/**
	 * 是否固定在底部
	 */
	fixedBottom?: boolean;
	/**
	 * 是否展示遮罩
	 * @default true
	 */
	mask?: boolean;
	/**
	 * 点击蒙层是否允许关闭
	 * @default	true
	 */
	maskClosable?: boolean;
	/**
	 * 遮罩样式
	 */
	maskStyle?: React.CSSProperties;
	/**
	 * 点击关闭按钮
	 */
	onClose?: () => void;
	/**
	 * 点击单个 icon
	 * @param item
	 */
	onItemClick?: (item: MorePanelItem) => void;
}

const prefixCls = createPrefixCls('more-panel');

const list: MorePanelItem[] = [
	{ id: 'gift', img: IconRewardGiftSvg, title: '礼物打赏' }
];

/**
 * 更多面板
 * @param props
 * @constructor
 */
export const MorePanel: React.FC<MorePanelProps> = (props) => {
	const {
		className,
		style,
		visible = true,
		title,
		fixedBottom,
		mask = true,
		maskClosable = true,
		maskStyle,
		onClose,
		onItemClick
	} = props;
	return (
		<div
			className={classNames(
				prefixCls,
				{
					[`${prefixCls}-fixed-bottom`]: fixedBottom,
					[`${prefixCls}-visible`]: visible
				},
				className
			)}
			style={style}
		>
			{mask ? (
				<div
					className={`${prefixCls}-mask`}
					style={maskStyle}
					onClick={() => maskClosable && onClose?.()}
				/>
			) : null}

			<div className={`${prefixCls}-main`}>
				<div className={`${prefixCls}-header`}>
					<div className={`${prefixCls}-header-title`}>{title}</div>
					<CloseOutlined className={`${prefixCls}-close`} onClick={onClose} />
				</div>

				<div className={`${prefixCls}-list`}>
					{list.map((item) => {
						return (
							<div
								className={`${prefixCls}-list-item`}
								key={item.id}
								onClick={() => onItemClick?.(item)}
							>
								<div className={`${prefixCls}-list-item-icon`}>
									<img
										className={`${prefixCls}-list-item-icon-img`}
										src={item.img}
										alt={item.img}
									/>
								</div>

								<div className={`${prefixCls}-list-item-title`}>
									{item.title}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
