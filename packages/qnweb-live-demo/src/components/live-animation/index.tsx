import './index.scss';

import classNames from 'classnames';
import React from 'react';

import { createPrefixCls } from '../_utils';

export interface IconLiveAnimationProps {
  className?: string;
  style?: React.CSSProperties;
}

const prefixCls = createPrefixCls('live-animation');

/**
 * 直播中 icon 动画
 * @param props
 * @constructor
 */
export const LiveAnimation: React.FC<IconLiveAnimationProps> = (props) => {
  const { className, style } = props;
  return <span className={classNames(prefixCls, className)} style={style}>
    {
      Array.from({ length: 4 }).map((_, index) => {
        return <span className={`${prefixCls}-column`} key={index}/>;
      })
    }
  </span>;
};
