import React from 'react';
import { useRequest } from 'ahooks';
import { Spin } from 'antd';

import { AdminApi } from '@/api';
import { defaultLoginConfig } from '@/config';

export const Login = () => {
	useRequest(() => {
		return AdminApi.postManagerLogin({
			user_name: defaultLoginConfig.username,
			password: defaultLoginConfig.password
		}).then((result) => {
			localStorage.setItem('Authorization', result.data?.access_token || '');
			window.location.href = '/content-audit';
		});
	});

	return (
		<Spin
			style={{
				position: 'fixed',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)'
			}}
			spinning={true}
			tip="登录中..."
		/>
	);
};
