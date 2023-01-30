import React from 'react';
import { useRequest } from 'ahooks';
import { Button, Card, Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';

import {
	AdminApi,
	PostManagerLoginParams,
	PostManagerLoginResult
} from '@/api';

import styles from './index.module.scss';

export const Login = () => {
	const history = useHistory();

	const { loading, runAsync } = useRequest<
		PostManagerLoginResult,
		PostManagerLoginParams[]
	>(
		(params) => {
			return AdminApi.postManagerLogin(params);
		},
		{
			manual: true
		}
	);

	const onFinish = (values: { username: string; password: string }) => {
		runAsync({
			user_name: values.username,
			password: values.password
		}).then((result) => {
			localStorage.setItem('authorization', result.data?.access_token || '');
			history.push('/content-audit');
		});
	};

	return (
		<div className={styles.page}>
			<Card className={styles.card}>
				<h1 className={styles.title}>系统登录</h1>
				<Form
					name="basic"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					autoComplete="off"
				>
					<Form.Item
						label="账号"
						name="username"
						rules={[{ required: true, message: '请输入账号' }]}
					>
						<Input placeholder="账号" />
					</Form.Item>

					<Form.Item
						label="密码"
						name="password"
						rules={[{ required: true, message: '请输入密码' }]}
					>
						<Input.Password placeholder="密码" />
					</Form.Item>

					<Form.Item>
						<Button loading={loading} type="primary" htmlType="submit" block>
							登录
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};
