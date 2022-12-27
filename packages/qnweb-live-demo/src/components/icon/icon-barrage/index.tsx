import './index.scss';

import classNames from 'classnames';
import React from 'react';

import { createPrefixCls } from '../../_utils';

export interface IconBarrageProps {
  className?: string;
  style?: React.CSSProperties;
  /**
   * 弹幕是否开启
   */
  value?: boolean;
  /**
   * 点击icon
   */
  onChange?: (value: boolean) => void;
}

const prefixCls = createPrefixCls('icon-barrage');

/**
 * 弹幕icon
 * @param props
 * @constructor
 */
export const IconBarrage: React.FC<IconBarrageProps> = (props) => {
  const {
    className, style,
    value,
    onChange,
  } = props;
  return <span
    className={classNames(prefixCls, {
      [`${prefixCls}-close`]: !value,
    }, className)}
    style={style}
    onClick={() => onChange?.(!value)}
  >弹</span>;
};
