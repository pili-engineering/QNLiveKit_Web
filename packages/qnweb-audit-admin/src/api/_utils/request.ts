import { Modal } from 'antd';
import axios, { AxiosError } from 'axios';

import { requestConfig } from '@/config';

const request = axios.create(requestConfig);

/**
 * 登录失效弹窗
 */
const loginModal = () => {
	Modal.error({
		content: '登录失败，点击确定重新登录',
		okText: '确定',
		onOk() {
			localStorage.clear();
			window.location.href = '/login';
			Modal.destroyAll();
		}
	});
};

request.interceptors.request.use(
	(config) => {
		const authorization = localStorage.getItem('authorization');
		return {
			...config,
			headers: {
				...config.headers,
				Authorization: authorization
			}
		};
	},
	(error) => Promise.reject(error)
);

// Add a response interceptor
request.interceptors.response.use(
	(response) => {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		const responseCode = response.data.code;
		const { url } = response.config;
		if ([0, 200].includes(responseCode)) {
			return response.data;
		}
		if (responseCode === 499) {
			loginModal();
			return Promise.reject(response.data);
		}
		Modal.error({
			content: `url: ${url}，message：${response.data.message}`
		});
		return Promise.reject(response.data);
	},
	(error) => {
		if (error instanceof AxiosError) {
			const { response: errorResponse } = error;
			if (!errorResponse) {
				return Promise.reject(error);
			}
			// 登录失效，清除登录信息并重新登录
			if (errorResponse.status === 401) {
				loginModal();
				return Promise.reject(error);
			}
			Modal.error({
				content: `status: ${errorResponse.status}, statusText: ${errorResponse.statusText}, url: ${errorResponse.config.url}, message：${errorResponse.data.message}`
			});
			return Promise.reject(error);
		}
		return Promise.reject(error);
	}
);

const mockRequest = <TData>(
	data: TData
): Promise<{
	code: number;
	message: string;
	data: TData;
}> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				code: 0,
				message: 'success',
				data
			});
		}, 1000);
	});
};

export { mockRequest, request };
