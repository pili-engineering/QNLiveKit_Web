/**
 * 不同环境下不同配置
 */
export const envConfig = {
  dev: {
    imConfig: {
      appKey: 'cigzypnhoyno'
    },
    requestConfig: {
      // baseURL: 'http://10.200.20.28:5080',
      baseURL: '/',
      timeout: 3000
    },
    liveRequestConfig: {
      // baseURL: 'http://10.200.20.28:8099',
      baseURL: '/',
      timeout: 3000
    }
  },
  test: {
    imConfig: {
      appKey: 'cigzypnhoyno'
    },
    requestConfig: {
      baseURL: 'http://10.200.20.28:5080',
      timeout: 3000
    },
    liveRequestConfig: {
      baseURL: 'http://10.200.20.28:8099',
      timeout: 3000
    }
  },
  prod: {
    imConfig: {
      appKey: 'cigzypnhoyno'
    },
    requestConfig: {
      baseURL: 'https://niucube-api.qiniu.com',
      timeout: 3000
    },
    liveRequestConfig: {
      baseURL: 'https://live-api.qiniu.com',
      timeout: 3000
    }
  }
};

/**
 * 当前环境
 */
export const curEnv = import.meta.env.VITE_NODE_ENV || 'dev';

/**
 * 当前配置
 */
export const curConfig = envConfig[curEnv];

/**
 * 融云IM配置
 * @link https://developer.rongcloud.cn/app/appService/XaKs3DkxBidRWBKYfdx0TA
 */
export const imConfig = curConfig.imConfig;

/**
 * 请求配置
 */
export const requestConfig = curConfig.requestConfig;

/**
 * lowcode接口请求配置
 */
export const liveRequestConfig = curConfig.liveRequestConfig;
