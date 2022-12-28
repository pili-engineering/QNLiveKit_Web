import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState
} from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button } from 'antd';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

import { GetClientItemLiveIdResult, LiveApi } from '@/api';
import {
	IconShoppingCartSvg,
	ProductListPanel,
	ProductListPanelProps,
	ProductPopup,
	RoomHeader
} from '@/components';
import { getUrlQuery, XGPlayer, XGPlayerConstructor } from '@/utils';

import './index.scss';

export interface RecordProps {
	className?: string;
	style?: React.CSSProperties;
}

const prefixCls = 'record';

export const Record: React.FC<RecordProps> = (props) => {
	const { className, style } = props;

	const history = useHistory();

	const urlQueryRef = useRef<{
		liveId: string;
		productId: string;
	}>({
		liveId: getUrlQuery('liveId') || '',
		productId: getUrlQuery('productId') || ''
	});
	const playerClientRef = useRef<XGPlayerConstructor | null>(null);

	const [productListVisible, setProductListVisible] = useState(false);
	const [productPopupVisible, setProductPopupVisible] = useState(true);

	/**
	 * 直播间商品
	 */
	const { data: productListData } = useRequest(() => {
		return LiveApi.getProductList({
			live_id: urlQueryRef.current.liveId
		});
	});
	const productList = useMemo<ProductListPanelProps['list']>(() => {
		return productListData?.data?.map((item) => {
			return {
				id: item.item_id || '',
				order: item.order,
				currentPrice: item.current_price,
				originalPrice: item.origin_price,
				thumbnail: item.thumbnail,
				title: item.title,
				tags: item.tags?.split(','),
				recordUrl: item.record?.record_url
			};
		});
	}, [productListData]);
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

	/**
	 * 房间信息
	 */
	const { data: roomInfoData } = useRequest(() => {
		return LiveApi.getRoomInfo({
			live_id: urlQueryRef.current.liveId
		});
	});
	const roomInfo = useMemo(() => {
		return roomInfoData?.data;
	}, [roomInfoData]);
	const playerUrl = useMemo(() => {
		return roomInfo?.flv_url;
	}, [roomInfo]);

	useEffect(() => {
		const playerUrl = currentProduct?.record?.record_url || '';
		if (!currentProduct) return;
		if (!playerUrl) return;

		const PlayerConstructor = XGPlayer.getPlayerConstructor(playerUrl);
		const player = new PlayerConstructor({
			id: 'player',
			width: '100%',
			height: '100%',
			poster: roomInfo?.cover_url,
			controls: true,
			url: playerUrl,
			playbackRate: [0.5, 0.75, 1, 1.25, 1.5, 2],
			ignores: ['fullscreen'],
			playsinline: true,
			autoplay: true,
			fitVideoSize: 'fixWidth',
			closeInactive: true
		});
		const handleComplete = (result: unknown) => {
			console.log('handleComplete', result);
		};
		const handleError = (result: unknown) => {
			console.log('handleError', result);
		};
		const handleEnded = (result: unknown) => {
			console.log('handleEnded', result);
		};
		const handlePause = (result: unknown) => {
			console.log('handlePause', result);
		};
		const handleWaiting = (result: unknown) => {
			console.log('handleWaiting', result);
		};
		player.on('complete', handleComplete);
		player.on('error', handleError);
		player.on('ended', handleEnded);
		player.on('pause', handlePause);
		player.on('waiting', handleWaiting);
		playerClientRef.current = player;
		return () => {
			player.off('complete', handleComplete);
			player.on('error', handleError);
			player.on('ended', handleEnded);
			player.on('pause', handlePause);
			player.on('waiting', handleWaiting);
			player.destroy();
			playerClientRef.current = null;
		};
	}, [playerUrl, roomInfo?.cover_url, currentProduct]);

	/**
	 * 点击看商品讲解视频
	 * @param result
	 */
	const onProductRecordClick: ProductListPanelProps['onItemRecordClick'] = (
		result
	) => {
		history.replace(
			`/record?liveId=${urlQueryRef.current.liveId}&productId=${result.id}`
		);
		setCurrentProduct(getProductById(result.id));
		setProductListVisible(false);
		setProductPopupVisible(true);
		playerClientRef.current.start(result.recordUrl);
	};

	/**
	 * 点击抢按钮
	 */
	const onProductPopupClick = () => {
		console.log('onProductPopupClick', currentProduct);
		history.push(
			`/shop?liveId=${urlQueryRef.current.liveId}&productId=${currentProduct?.item_id}`
		);
	};

	return (
		<div className={classNames(prefixCls, className)} style={style}>
			<div id="player" className={`${prefixCls}-player`} />

			<ProductListPanel
				title="商品列表"
				visible={productListVisible}
				fixedBottom={true}
				list={productList}
				onItemRecordClick={onProductRecordClick}
				onItemBuyClick={(result) =>
					history.push(
						`/shop?liveId=${urlQueryRef.current.liveId}&productId=${result.id}`
					)
				}
				onClose={() => setProductListVisible(false)}
			/>

			<ProductPopup
				className={`${prefixCls}-popup`}
				visible={productPopupVisible}
				thumbnail={currentProduct?.thumbnail}
				order={currentProduct?.order}
				price={currentProduct?.current_price}
				title={currentProduct?.title}
				onClose={() => setProductPopupVisible(false)}
				onClick={onProductPopupClick}
			/>

			<RoomHeader
				className={`${prefixCls}-header`}
				title={roomInfo?.title}
				subTitle={roomInfo?.anchor_info.nick}
				avatar={roomInfo?.anchor_info?.avatar}
				showUserList={false}
				showCloseIcon={false}
			/>

			<div className={`${prefixCls}-footer`}>
				<Button
					className={`${prefixCls}-button`}
					type="primary"
					danger={true}
					icon={<LeftOutlined />}
					block={true}
					onClick={() =>
						history.replace(`/live-room?liveId=${urlQueryRef.current.liveId}`)
					}
				>
					返回当前直播
				</Button>

				<img
					className={`${prefixCls}-shop`}
					src={IconShoppingCartSvg}
					alt={IconShoppingCartSvg}
					onClick={() => setProductListVisible(true)}
				/>
			</div>
		</div>
	);
};
