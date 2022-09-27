import axios from 'axios';
import { Modal } from 'antd';

import { requestConfig } from '@/config';

const request = axios.create(requestConfig);

request.interceptors.request.use((config) => {
  const Authorization = localStorage.getItem('Authorization');
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization
    }
  };
}, (error) => Promise.reject(error));

// Add a response interceptor
request.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  const responseCode = response.data.code;
  const { url } = response.config;
  if ([0, 200].includes(responseCode)) {
    return response.data;
  }
  Modal.error({
    title: '接口请求出错',
    content: `url: ${url}，message：${response.data.message}`,
    onOk() {
      // 登录失效，清除登录信息并重新登录
      if (responseCode === 499) {
        localStorage.clear();
        window.location.reload();
      }
    }
  });
  return Promise.reject(response.data);
}, (error) => {
  Modal.error({
    title: '接口请求出错',
    content: error.message,
  });
  return Promise.reject(error);
});

const mockRequest = <TData>(data: TData): Promise<{
  code: number;
  message: string;
  data: TData;
}> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: 0,
        message: 'success',
        data
      });
    }, 1000);
  });
};

export {
  request,
  mockRequest
};
