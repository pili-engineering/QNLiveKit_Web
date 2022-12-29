import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import classNames from 'classnames';

import { createPrefixCls } from '../_utils';

import './index.scss';

export interface ProductPopupProps {
	className?: string;
	style?: React.CSSProperties;
	/**
	 *
	 */
	visible?: boolean;
	/**
	 * 序号
	 */
	order?: number | null;
	/**
	 * 缩略图
	 */
	thumbnail?: string;
	/**
	 * 标题
	 */
	title?: string;
	/**
	 * 价格
	 */
	price?: string;
	/**
	 * 点击关闭按钮
	 */
	onClose?: () => void;
	/**
	 * 点击抢按钮
	 */
	onClick?: () => void;
}

const prefixCls = createPrefixCls('product-popup');

/**
 * 商品弹窗
 * @param props
 * @constructor
 */
export const ProductPopup: React.FC<ProductPopupProps> = (props) => {
	const {
		className,
		style,
		visible = true,
		order,
		thumbnail,
		title,
		price,
		onClose,
		onClick
	} = props;

	return visible ? (
		<div className={classNames(prefixCls, className)} style={style}>
			<CloseOutlined className={`${prefixCls}-close`} onClick={onClose} />

			{typeof order === 'number' ? (
				<div className={`${prefixCls}-order`}>{order}</div>
			) : null}

			<Image
				style={{ width: '100%', height: '130px', objectFit: 'cover' }}
				src={thumbnail}
				preview={false}
			/>

			<div className={`${prefixCls}-content`}>
				<div className={`${prefixCls}-title`}>{title}</div>
				<div className={`${prefixCls}-button`}>
					<span className={`${prefixCls}-button-price`}>{price}</span>
					<span className={`${prefixCls}-button-text`} onClick={onClick}>
						抢
					</span>
				</div>
			</div>
		</div>
	) : null;
};
