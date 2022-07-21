import React, { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';

import { IMStore, IMStoreState, useIMStore, UserStore, useUserStore } from '@/store';
import Router from './router';

import './styles';

/**
 * 加载im数据缓存
 */
const loadIMState = (): IMStoreState => {
  const imStore = localStorage.getItem('imStoreState') || '{}';
  try {
    return JSON.parse(imStore);
  } catch (e) {
    return {};
  }
};

function App() {
  const { state: userStoreState, dispatch: dispatchUserStoreState } = useUserStore();
  const { state: imStoreState, dispatch: dispatchIMStoreState } = useIMStore();

  /**
   * 初始化store
   */
  useEffect(() => {
    const imStore = loadIMState();
    dispatchIMStoreState({
      type: 'PATCH',
      payload: imStore
    });
    dispatchUserStoreState({
      type: 'PATCH',
      payload: {
        loginToken: localStorage.getItem('authorization') || '',
        accessToken: localStorage.getItem('accessToken') || '',
      }
    });
  }, []);

  /**
   * 缓存authorization
   */
  useEffect(() => {
    window.localStorage.setItem('authorization', userStoreState.loginToken || '');
    window.localStorage.setItem('accessToken', userStoreState.accessToken || '');
  }, [userStoreState]);

  /**
   * 缓存imStoreState
   */
  useEffect(() => {
    const { imClient, ...restStore } = imStoreState;
    localStorage.setItem('imStoreState', JSON.stringify(restStore));
  }, [imStoreState]);

  return <Router/>;
}

const WrapperApp = () => {
  return <ConfigProvider locale={zhCN}>
    <UserStore>
      <IMStore>
        <App/>
      </IMStore>
    </UserStore>
  </ConfigProvider>;
};

export default WrapperApp;
