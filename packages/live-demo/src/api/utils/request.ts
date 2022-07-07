import axios  from 'axios';
import { message, Modal } from 'antd';

import { ApiResponseCode, liveRequestConfig, requestConfig } from '@/config';

const request = axios.create(requestConfig);

request.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

request.interceptors.response.use(function (response ) {
  const responseCode: keyof typeof ApiResponseCode = response.data.code;
  if (responseCode === 0) {
    return response.data.data;
  } else if ([401001, 401003].includes(responseCode)) { // 用户未登录或TOKEN过期
    Modal.error({
      title: '提示',
      content: response.data.message,
      onOk() {
        localStorage.clear();
        window.location.href = '/';
      },
    })
    return Promise.reject('重新登录');
  } else {
    message.error(response.data.message);
    return Promise.reject(`${response.config.url} 接口响应错误: ${response.data.message}`);
  }
}, function (error) {
  message.error(error.message)
  return Promise.reject(error);
});

const liveRequest = axios.create(liveRequestConfig);

liveRequest.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

liveRequest.interceptors.response.use(function (response ) {
  const responseCode = response.data.code;
  if (responseCode === 200) {
    return response.data.data;
  } else {
    Modal.error({
      title: '提示',
      content: response.data.message,
    })
    message.error(response.data.message);
    return Promise.reject(`${response.config.url} 接口响应错误: ${response.data.message}`);
  }
}, function (error) {
  message.error(error.message)
  return Promise.reject(error);
});

export {
  request,
  liveRequest
};
