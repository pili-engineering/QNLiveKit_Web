import React from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Button, Image, Tag } from 'antd';
import classNames from 'classnames';

import { createPrefixCls } from '../_utils';
import { LiveAnimation } from '..';

import './index.scss';

export interface ProductCardInfo {
	/**
	 * 序号
	 */
	order?: number;
	/**
	 * 商品标题
	 */
	title?: string;
	/**
	 * 商品标签
	 */
	tags?: string[];
	/**
	 * 原价
	 */
	originalPrice?: string;
	/**
	 * 现价
	 */
	currentPrice?: string;
	/**
	 * 商品缩略图
	 */
	thumbnail?: string;
	/**
	 * 是否正在讲解
	 */
	isLive?: boolean;
	/**
	 * 回放地址
	 */
	recordUrl?: string | null;
}

export type ProductCardProps = {
	className?: string;
	style?: React.CSSProperties;
	/**
	 * 点击去购买按钮
	 */
	onBuyClick?: React.MouseEventHandler<HTMLElement>;
	/**
	 * 点击看讲解按钮
	 */
	onRecordClick?: React.MouseEventHandler<HTMLDivElement>;
} & ProductCardInfo;

const prefixCls = createPrefixCls('product-card');

/**
 * 商品卡片
 * @param props
 * @constructor
 */
export const ProductCard: React.FC<ProductCardProps> = (props) => {
	const {
		className,
		style,
		thumbnail,
		order,
		title,
		tags,
		originalPrice,
		currentPrice,
		isLive,
		recordUrl,
		onBuyClick,
		onRecordClick
	} = props;

	const renderTip = () => {
		if (isLive) {
			return (
				<div className={`${prefixCls}-live`}>
					<LiveAnimation />
					<span className={`${prefixCls}-live-text`}>讲解中</span>
				</div>
			);
		}
		if (recordUrl) {
			return (
				<div className={`${prefixCls}-record`} onClick={onRecordClick}>
					<PlayCircleOutlined />
					<span className={`${prefixCls}-record-text`}>看讲解</span>
				</div>
			);
		}
	};

	return (
		<div className={classNames(prefixCls, className)} style={style}>
			<div className={`${prefixCls}-thumbnail`}>
				{typeof order === 'number' ? (
					<div className={`${prefixCls}-order`}>{order}</div>
				) : null}
				<Image
					width={100}
					height={100}
					src={thumbnail}
					preview={false}
					style={{ objectFit: 'cover', borderRadius: '8px' }}
				/>
				{renderTip()}
			</div>

			<div className={`${prefixCls}-content`}>
				<div className={`${prefixCls}-header`}>
					<div className={`${prefixCls}-title`}>{title}</div>
					<div className={`${prefixCls}-tags`}>
						{tags?.map((tag, index) => {
							return (
								<Tag key={index} color="#fa8c15">
									{tag}
								</Tag>
							);
						})}
					</div>
				</div>

				<div className={`${prefixCls}-footer`}>
					<div className={`${prefixCls}-price`}>
						{currentPrice ? (
							<span
								className={`${prefixCls}-price-current ${prefixCls}-price-large`}
							>
								{currentPrice}
							</span>
						) : null}
						{originalPrice ? (
							<span className={`${prefixCls}-price-original`}>
								{originalPrice}
							</span>
						) : null}
					</div>

					<Button type="primary" danger onClick={onBuyClick}>
						去购买
					</Button>
				</div>
			</div>
		</div>
	);
};
