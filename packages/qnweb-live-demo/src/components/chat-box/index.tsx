import React, { CSSProperties, useEffect } from 'react';
import { Avatar } from 'antd';
import classNames from 'classnames';

import { createPrefixCls } from '../_utils';

import './index.scss';

export interface ChatBoxListItem {
	/**
	 * 消息id
	 */
	id?: string;
	/**
	 * 消息类型
	 * @default 'text'
	 */
	type?: 'text' | 'gift';
	/**
	 * 消息内容
	 */
	content?: string;
	/**
	 * 用户名
	 */
	username?: string;
	/**
	 * 用户头像
	 */
	avatar?: string;
}

export interface ChatBoxProps {
	className?: string;
	style?: CSSProperties;
	/**
	 * 消息列表
	 */
	list?: ChatBoxListItem[];
	/**
	 * 最大高度
	 */
	scrollHeight?: number;
	/**
	 * 是否自动滚动到底部
	 */
	autoScroll?: boolean;
}

const prefixCls = createPrefixCls('chat-box');

const renderTextMessage = (message: ChatBoxListItem) => {
	return (
		<div className={`${prefixCls}-message`} key={message.id}>
			<Avatar src={message.avatar} size={24} />
			<div className={`${prefixCls}-message-content`}>
				<div className={`${prefixCls}-message-content-username`}>
					{message.username}
				</div>
				<div className={`${prefixCls}-message-content-text`}>
					{message.content}
				</div>
			</div>
		</div>
	);
};

const renderGiftMessage = (message: ChatBoxListItem) => {
	return (
		<div className={`${prefixCls}-message-gift`} key={message.id}>
			<Avatar src={message.avatar} size={24} />
			<div className={`${prefixCls}-message-gift-content`}>
				<div className={`${prefixCls}-message-gift-content-username`}>
					{message.username}
				</div>
				<div>打赏</div>
				<div className={`${prefixCls}-message-gift-content-text`}>
					{message.content}
				</div>
			</div>
		</div>
	);
};

/**
 * 聊天消息
 * @param props
 * @constructor
 */
export const ChatBox: React.FC<ChatBoxProps> = (props) => {
	const { className, style, list, scrollHeight, autoScroll = true } = props;

	const chatBoxEleRef = React.useRef<HTMLDivElement>(null);

	/**
	 * 当有新消息时，自动滚动到底部
	 */
	useEffect(() => {
		if (!scrollHeight || !autoScroll || !chatBoxEleRef.current) return;
		chatBoxEleRef.current.scrollTop = chatBoxEleRef.current.scrollHeight;
	}, [autoScroll, scrollHeight, list]);

	return (
		<div
			className={classNames(prefixCls, className)}
			style={{
				maxHeight: scrollHeight,
				overflowY: scrollHeight ? 'scroll' : 'auto',
				...style
			}}
			ref={chatBoxEleRef}
		>
			<div className={`${prefixCls}-list`}>
				{list?.map((message) => {
					if (message.type === 'gift') {
						return renderGiftMessage(message);
					}
					return renderTextMessage(message);
				})}
			</div>
		</div>
	);
};
