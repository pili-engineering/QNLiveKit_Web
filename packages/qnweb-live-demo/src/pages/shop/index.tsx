import React, { useCallback, useEffect, useRef, useState } from 'react';
import { LeftCircleOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, Image } from 'antd';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

import { GetClientItemLiveIdResult, LiveApi } from '@/api';
import { getUrlQuery } from '@/utils';

import placeholderPNG from './placeholder.png';

import './index.scss';

export interface ShopProps {
	className?: string;
	style?: React.CSSProperties;
}

const prefixCls = 'shop';

export const Shop: React.FC<ShopProps> = (props) => {
	const { className, style } = props;

	const history = useHistory();

	const urlQueryRef = useRef<{
		liveId: string;
		productId: string;
	}>({
		liveId: getUrlQuery('liveId') || '',
		productId: getUrlQuery('productId') || ''
	});

	/**
	 * 直播间商品
	 */
	const { data: productListData } = useRequest(() => {
		return LiveApi.getProductList({
			live_id: urlQueryRef.current.liveId
		});
	});
	const [currentProduct, setCurrentProduct] = useState<
		Required<GetClientItemLiveIdResult>['data'][number] | null
	>();

	/**
	 * 根据id查商品
	 */
	const getProductById = useCallback(
		(id: string) => {
			return productListData?.data?.find((item) => item.item_id === id);
		},
		[productListData]
	);

	/**
	 * 当前商品
	 */
	useEffect(() => {
		const curProduct = getProductById(urlQueryRef.current.productId);
		setCurrentProduct(curProduct || null);
	}, [getProductById]);

	return (
		<div className={classNames(prefixCls, className)} style={style}>
			<LeftCircleOutlined
				className={`${prefixCls}-icon`}
				onClick={() => history.goBack()}
			/>

			<Image
				style={{ height: '300px', objectFit: 'cover' }}
				preview={false}
				src={currentProduct?.thumbnail}
			/>
			<Image
				style={{ width: '80%', margin: '0 20px' }}
				preview={false}
				src={placeholderPNG}
			/>
			<div className={`${prefixCls}-footer`}>
				<Button
					className={`${prefixCls}-footer-button`}
					type="primary"
					danger={true}
				>
					立即购买
				</Button>
				<Button className={`${prefixCls}-footer-button`} type="primary">
					加入购物车
				</Button>
			</div>
		</div>
	);
};
