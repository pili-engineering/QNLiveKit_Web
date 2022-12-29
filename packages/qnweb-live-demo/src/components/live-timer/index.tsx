import React, { useRef, useState } from 'react';
import { useInterval } from 'ahooks';
import classNames from 'classnames';
import moment from 'moment';

import { createPrefixCls } from '../_utils';

import './index.scss';

export interface LiveTimerProps {
	className?: string;
	style?: React.CSSProperties;
	/**
	 * 标题
	 */
	title?: string;
}

const prefixCls = createPrefixCls('live-timer');

const addZero = (num: number) => {
	return num < 10 ? `0${num}` : num;
};

/**
 * 直播间计时器
 * @param props
 * @constructor
 */
export const LiveTimer: React.FC<LiveTimerProps> = (props) => {
	const { className, style, title } = props;

	/**
	 * 直播间计时器
	 */
	const intervalCountRef = useRef<number>(0);
	const [intervalTime, setIntervalTime] = useState<string>();
	useInterval(() => {
		intervalCountRef.current++;

		const time = moment.duration(intervalCountRef.current, 'seconds');
		const minutes = addZero(time.minutes());
		const seconds = addZero(time.seconds());
		setIntervalTime(`${minutes}:${seconds}`);
	}, 1000);

	return (
		<div className={classNames(prefixCls, className)} style={style}>
			<div className={`${prefixCls}-title`}>{title}</div>
			<div className={`${prefixCls}-content`}>{intervalTime}</div>
		</div>
	);
};
