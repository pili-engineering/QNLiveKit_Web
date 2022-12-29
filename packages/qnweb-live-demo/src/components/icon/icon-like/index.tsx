import React, { useRef } from 'react';
import classNames from 'classnames';

import { IconLikeSvg } from '../../_images';
import { createPrefixCls } from '../../_utils';

import './index.scss';

export interface IconLikeProps {
	className?: string;
	style?: React.CSSProperties;
	/**
	 * 点赞数
	 */
	count?: number;
	/**
	 * 点击icon
	 */
	onClick?: () => void;
}

const prefixCls = createPrefixCls('icon-like');

/**
 * 点赞icon
 * @param props
 * @constructor
 */
export const IconLike: React.FC<IconLikeProps> = (props) => {
	const { className, style, count = 0, onClick } = props;
	const clickCountRef = useRef<number>(0);
	const ref = useRef<HTMLSpanElement>(null);

	const renderLike = (id: number) => {
		const likeElement = document.createElement('div');
		const cls = `${prefixCls}-animation`;
		clickCountRef.current++;
		likeElement.className = `${cls} ${cls}-${id}`;
		likeElement.style.willChange = 'margin-top';
		ref.current?.appendChild(likeElement);
		likeElement.onanimationend = () => {
			likeElement.remove();
		};
	};

	const _onClick = () => {
		onClick?.();
		renderLike(1);
		renderLike(2);
		renderLike(3);
		renderLike(4);
		renderLike(5);
	};

	return (
		<span
			className={classNames(prefixCls, className)}
			style={style}
			ref={ref}
			onClick={_onClick}
		>
			<span className={`${prefixCls}-count`}>{count}</span>
			<img className={`${prefixCls}-img`} src={IconLikeSvg} alt={IconLikeSvg} />
		</span>
	);
};
