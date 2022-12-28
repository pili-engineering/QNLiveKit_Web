import './index.scss';

import { CloseOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React from 'react';

import { createPrefixCls } from '../_utils';

export interface Gift {
	/**
	 * 礼物id
	 */
	id: string;
	/**
	 * 礼物图片
	 */
	title: string;
	/**
	 * 礼物图片
	 */
	img: string;
	/**
	 * 礼物价格
	 */
	price?: number | string | null;
}

export interface GiftPanelProps {
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
	 * 固定在底部
	 */
	fixedBottom?: boolean;
	/**
	 * 当前选中的礼物
	 */
	selectedGift?: Gift['id'];
	/**
	 * 自定义礼物列表
	 */
	list?: Gift[];
	/**
	 * 点击关闭按钮
	 */
	onClose?: React.MouseEventHandler<HTMLSpanElement>;
	/**
	 * 点击选择礼物
	 * @param gift
	 */
	onItemClick?: (gift: Gift) => void;
	/**
	 * 点击支付按钮
	 */
	onGiftPayClick?: (gift: Gift) => void;
}

const prefixCls = createPrefixCls('gift-panel');

/**
 * 礼物面板
 * @param props
 * @constructor
 */
export const GiftPanel: React.FC<GiftPanelProps> = (props) => {
	const {
		className,
		style,
		visible = true,
		title,
		selectedGift,
		list = [],
		fixedBottom,
		onClose,
		onItemClick,
		onGiftPayClick
	} = props;

	return (
		<div
			className={classNames(
				prefixCls,
				{
					[`${prefixCls}-visible`]: visible,
					[`${prefixCls}-fixed-bottom`]: fixedBottom
				},
				className
			)}
			style={style}
		>
			<div className={`${prefixCls}-header`}>
				<div className={`${prefixCls}-header-title`}>{title}</div>
				<CloseOutlined className={`${prefixCls}-close`} onClick={onClose} />
			</div>

			<div className={`${prefixCls}-list`}>
				{list.map((item) => {
					const selected = selectedGift === item.id;
					return (
						<div
							className={classNames(`${prefixCls}-list-item`, {
								[`${prefixCls}-list-item-selected`]: selected
							})}
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

							{selected ? (
								<div
									className={`${prefixCls}-list-item-selected-pay`}
									onClick={() => onGiftPayClick?.(item)}
								>
									<div className={`${prefixCls}-list-item-selected-pay-title`}>
										{item.price}
									</div>
									<div className={`${prefixCls}-list-item-selected-pay-button`}>
										支付
									</div>
								</div>
							) : (
								<div className={`${prefixCls}-list-item-text`}>
									<div className={`${prefixCls}-list-item-title`}>
										{item.title}
									</div>
									<div className={`${prefixCls}-list-item-price`}>
										{item.price}
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};
