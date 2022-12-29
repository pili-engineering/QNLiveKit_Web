import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import { createPrefixCls } from '../_utils';
import { ProductCard, ProductCardInfo } from '..';

import './index.scss';

export interface ProductListPanelProps {
	className?: string;
	style?: React.CSSProperties;
	/**
	 * 标题
	 */
	title: string;
	/**
	 * 商品列表
	 */
	list?: Array<
		ProductCardInfo & {
			/**
			 * 商品id
			 */
			id: string;
		}
	>;
	/**
	 * 是否可见
	 */
	visible?: boolean;
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
	 * 点击去购买按钮
	 */
	onItemBuyClick?: (
		result: Required<ProductListPanelProps>['list'][number]
	) => void;
	/**
	 * 点击看讲解按钮
	 */
	onItemRecordClick?: (
		result: Required<ProductListPanelProps>['list'][number]
	) => void;
	/**
	 * 点击关闭按钮
	 */
	onClose?: () => void;
}

const prefixCls = createPrefixCls('product-list-panel');

/**
 * 商品列表
 * @param props
 * @constructor
 */
export const ProductListPanel: React.FC<ProductListPanelProps> = (props) => {
	const {
		className,
		style,
		title,
		list,
		visible,
		fixedBottom,
		mask = true,
		maskClosable = true,
		maskStyle,
		onItemBuyClick,
		onItemRecordClick,
		onClose
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
					<CloseOutlined
						className={`${prefixCls}-header-close`}
						onClick={onClose}
					/>
				</div>

				<div className={`${prefixCls}-content`}>
					<div className={`${prefixCls}-content-list`}>
						{list?.map((product) => {
							return (
								<ProductCard
									className={`${prefixCls}-content-list-item`}
									key={product.id}
									onBuyClick={() => onItemBuyClick?.(product)}
									onRecordClick={() => onItemRecordClick?.(product)}
									{...product}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
