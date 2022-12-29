import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

import { BaseApi, LiveApi } from '@/api';
import { useUserStore } from '@/store';

import './index.scss';

export const Auth: React.FC = (props) => {
	const { children } = props;
	const { dispatch: dispatchUserStoreState } = useUserStore();
	const [authenticated, setAuthenticated] = useState(false);

	/**
	 * 初始化用户信息
	 */
	useEffect(() => {
		let state = {};
		BaseApi.getAccountInfo()
			.then((result) => {
				state = Object.assign(state, result.data);
				return LiveApi.getLiveAuthToken({
					userID: result.data.accountId,
					deviceID: encodeURIComponent(window.navigator.userAgent)
				});
			})
			.then((result) => {
				state = Object.assign(state, result.data);
				dispatchUserStoreState({
					type: 'PATCH',
					payload: state
				});
				setAuthenticated(true);
			});
	}, [dispatchUserStoreState]);

	return (
		<div className="auth">
			{authenticated ? (
				children
			) : (
				<Spin className="auth-loading" tip="页面加载中..." />
			)}
		</div>
	);
};
