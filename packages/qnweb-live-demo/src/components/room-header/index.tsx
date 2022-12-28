import './index.scss';

import { CloseOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import classNames from 'classnames';
import React from 'react';

import { createPrefixCls } from '../_utils';

interface User {
	/**
	 * 用户头像
	 */
	avatar: string;
}

export interface RoomHeaderProps {
	className?: string;
	style?: React.CSSProperties;
	/**
	 * 头像
	 */
	avatar?: string;
	/**
	 * 标题
	 */
	title?: string;
	/**
	 * 子标题
	 */
	subTitle?: string;
	/**
	 * 用户列表是否可见
	 */
	showUserList?: boolean;
	/**
	 * 用户列表
	 */
	userList?: User[];
	/**
	 * 用户数
	 */
	userCount?: number;
	showCloseIcon?: boolean;
	/**
	 * 点击关闭按钮
	 */
	onClose?: React.MouseEventHandler<HTMLSpanElement>;
}

const prefixCls = createPrefixCls('room-header');

/**
 * 房间头部
 * @param props
 * @constructor
 */
export const RoomHeader: React.FC<RoomHeaderProps> = (props) => {
	const {
		className,
		style,
		avatar,
		title,
		subTitle,
		userList,
		userCount,
		showUserList = true,
		showCloseIcon = true,
		onClose
	} = props;
	return (
		<div className={classNames(prefixCls, className)} style={style}>
			<div className={`${prefixCls}-main`}>
				<Avatar className={`${prefixCls}-main-avatar`} size={38} src={avatar} />
				<div className={`${prefixCls}-main-title`}>
					<div className={`${prefixCls}-main-title-main`}>{title}</div>
					<div className={`${prefixCls}-main-title-sub`}>{subTitle}</div>
				</div>
			</div>

			{showUserList ? (
				<div className={`${prefixCls}-users`}>
					{userList?.slice(0, 3)?.map((user, index) => {
						return (
							<Avatar
								className={`${prefixCls}-users-avatar`}
								key={index}
								src={user.avatar}
								size={28}
							/>
						);
					})}
					<div className={`${prefixCls}-users-count`}>{userCount}</div>
				</div>
			) : null}

			{showCloseIcon ? <CloseOutlined onClick={onClose} /> : null}
		</div>
	);
};
