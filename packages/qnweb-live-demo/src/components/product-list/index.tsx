import './index.scss';

import { CloseOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React from 'react';

import { ProductCard, ProductCardInfo } from '..';
import { createPrefixCls } from '../_utils';

export interface ProductListProps {
  className?: string;
  style?: React.CSSProperties;
  /**
   * 标题
   */
  title: string;
  /**
   * 商品列表
   */
  list?: Array<ProductCardInfo & {
    /**
     * 商品id
     */
    id: string;
  }>;
  /**
   * 是否可见
   */
  visible?: boolean;
  /**
   * 是否固定在底部
   */
  fixedBottom?: boolean;
  /**
   * 点击去购买按钮
   */
  onItemBuyClick?: (result: Required<ProductListProps>['list'][number]) => void;
  /**
   * 点击看讲解按钮
   */
  onItemRecordClick?: (result: Required<ProductListProps>['list'][number]) => void;
  /**
   * 点击关闭按钮
   */
  onClose?: React.MouseEventHandler<HTMLSpanElement>;
}

const prefixCls = createPrefixCls('product-list');

/**
 * 商品列表
 * @param props
 * @constructor
 */
export const ProductList: React.FC<ProductListProps> = (props) => {
  const {
    className, style,
    title, list, visible, fixedBottom,
    onItemBuyClick, onItemRecordClick, onClose
  } = props;
  return <div className={classNames(prefixCls, {
    [`${prefixCls}-fixed-bottom`]: fixedBottom,
    [`${prefixCls}-visible`]: visible,
  }, className)} style={style}>
    <div className={`${prefixCls}-header`}>
      <div className={`${prefixCls}-header-title`}>{title}</div>
      <CloseOutlined className={`${prefixCls}-header-close`} onClick={onClose}/>
    </div>

    <div className={`${prefixCls}-content`}>
      <div className={`${prefixCls}-content-list`}>
        {
          list?.map((product) => {
            return <ProductCard
              className={`${prefixCls}-content-list-item`}
              key={product.id}
              onBuyClick={() => onItemBuyClick?.(product)}
              onRecordClick={() => onItemRecordClick?.(product)}
              {...product}
            />;
          })
        }
      </div>
    </div>
  </div>;
};
