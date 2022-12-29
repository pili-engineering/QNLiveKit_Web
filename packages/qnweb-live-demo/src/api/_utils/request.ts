import { message, Modal } from 'antd';
import axios from 'axios';

import { liveRequestConfig, requestConfig } from '@/config';

const request = axios.create(requestConfig);

request.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

request.interceptors.response.use(
	function (response) {
		const responseCode = response.data.code;
		if (responseCode === 0) {
			return response.data;
		}
		if ([401001, 401003].includes(responseCode)) {
			Modal.error({
				title: '提示',
				content: '登录已过期，请重新登录',
				onOk: () => {
					window.location.href = '/login';
				}
			});
			return Promise.reject(response.data);
		}
		Modal.error({
			title: '接口请求错误',
			content: response.data.message
		});
		return Promise.reject(response.data);
	},
	function (error) {
		Modal.error({
			title: '接口请求错误',
			content: error.message
		});
		return Promise.reject(error);
	}
);

const liveRequest = axios.create(liveRequestConfig);

liveRequest.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

liveRequest.interceptors.response.use(
	function (response) {
		const responseCode = response.data.code;
		if ([0, 200].includes(responseCode)) {
			return response.data;
		}
		Modal.error({
			title: '接口请求错误',
			content: response.data.message
		});
		message.error(response.data.message);
		return Promise.reject(response.data);
	},
	function (error) {
		Modal.error({
			title: '接口请求错误',
			content: error.message
		});
		return Promise.reject(error);
	}
);

export { liveRequest, request };
