import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

import { createPrefixCls } from '../_utils';

import './index.scss';

export interface WaitingNoticeProps {
	className?: string;
	style?: React.CSSProperties;
	/**
	 * 类型
	 */
	type: 'trailer' | 'pause';
	/**
	 * 开播时间
	 * @description 仅在 type 为 trailer 时有效, 为开播时间的时间戳, 单位为毫秒(ms)
	 */
	startTime?: number;
}

const prefixCls = createPrefixCls('waiting-notice');

const getContext = (type: WaitingNoticeProps['type'], startTime?: number) => {
	if (type === 'trailer') {
		return {
			title: '预计开播',
			content: moment(startTime).format('YYYY/MM/DD HH:mm')
		};
	}
	if (type === 'pause') {
		return {
			title: '主播马上回来',
			content: '敬请期待'
		};
	}
	return {
		title: '',
		content: ''
	};
};

/**
 * 等待提示
 * @param props
 * @constructor
 */
export const WaitingNotice: React.FC<WaitingNoticeProps> = (props) => {
	const { className, style, type, startTime } = props;

	const { title, content } = getContext(type, startTime);

	return (
		<div className={classNames(prefixCls, className)} style={style}>
			<div className={`${prefixCls}-title`}>{title}</div>
			<div className={`${prefixCls}-content`}>{content}</div>
		</div>
	);
};
