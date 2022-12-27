import './index.scss';

import { Avatar } from 'antd';
import classNames from 'classnames';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { createPrefixCls } from '../_utils';

export interface GiftAnimationProps {
  className?: string;
  style?: React.CSSProperties;
  /**
   * 队列里最多显示多少个动画
   * @default 3
   */
  max?: number;
}

export interface GiftAnimationInfo {
  /**
   * 用户头像
   */
  avatar: string;
  /**
   * 用户名
   */
  username: string;
  /**
   * 内容
   */
  content: string;
  /**
   * 礼物图片
   */
  giftImg: string;
}

export interface GiftAnimationHandler {
  render: (data: GiftAnimationInfo) => void;
}

const prefixCls = createPrefixCls('gift-animation');

/**
 * 礼物动画
 */
export const GiftAnimation = React.forwardRef<GiftAnimationHandler, GiftAnimationProps>(function GiftAnimation(props, ref) {
  const {
    className, style,
    max = 3
  } = props;

  const [pointer, setPointer] = useState(0);
  const [list, setList] = useState<GiftAnimationInfo[]>([]);
  const [pendingQueue, setPendingQueue] = useState<GiftAnimationInfo[]>([]);

  useImperativeHandle(ref, () => ({
    render: (data) => {
      setPendingQueue((prev) => [...prev, data]);
    }
  }));

  useEffect(() => {
    if (list.slice(pointer).length < max && pendingQueue.length > 0) {
      setList((prev) => [...prev, pendingQueue[0]]);
      setPendingQueue((prev) => prev.slice(1));
    }
  }, [list, max, pendingQueue, pointer]);

  const onEntered = (node: HTMLElement) => {
    node.remove();
    setPointer((prev) => prev + 1);
  };

  return <div className={classNames(prefixCls, className)} style={style}>
    <TransitionGroup>
      {
        list.map((item, index) => {
          return <CSSTransition
            classNames={`${prefixCls}-item`}
            key={index}
            timeout={3000}
            unmountOnExit={true}
            onEntered={onEntered}
          >
            <div className={`${prefixCls}-item`}>
              <div className={`${prefixCls}-item-main`}>
                <Avatar className={`${prefixCls}-item-main-avatar`} src={item.avatar}/>
                <div className={`${prefixCls}-item-main-content`}>
                  <div className={`${prefixCls}-item-main-content-title`}>{item.username}</div>
                  <div className={`${prefixCls}-item-main-content-subtitle`}>{item.content}</div>
                </div>
              </div>
              <img
                className={`${prefixCls}-item-img`}
                alt="gift"
                src={item.giftImg}
              />
            </div>
          </CSSTransition>;
        })
      }
    </TransitionGroup>
  </div>;
});
