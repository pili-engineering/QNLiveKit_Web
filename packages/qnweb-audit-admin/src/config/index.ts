import { AxiosRequestConfig } from 'axios';

const configMap: Record<ImportMetaEnv['VITE_NODE_ENV'], {
  request: AxiosRequestConfig;
  defaultLogin: {
    username: string;
    password: string;
  }
}> = {
  dev: {
    request: {
      baseURL: '/',
      timeout: 3000,
    },
    defaultLogin: {
      username: 'admin',
      password: '123456',
    }
  },
  staging: {
    request: {
      baseURL: 'http://10.200.20.28:8099',
      timeout: 3000,
    },
    defaultLogin: {
      username: 'admin',
      password: '123456',
    }
  },
  prod: {
    request: {
      baseURL: 'https://live-api.qiniu.com',
      timeout: 3000,
    },
    defaultLogin: {
      username: 'admin',
      password: '123456',
    }
  }
};

const env = import.meta.env.VITE_NODE_ENV || 'dev';

export const requestConfig = configMap[env].request;

export const defaultLoginConfig = configMap[env].defaultLogin;
