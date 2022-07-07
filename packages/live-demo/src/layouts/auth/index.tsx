import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

import { BaseCommonApi, LiveApi } from '@/api';
import { useUserStore } from '@/store';

import './index.scss';

export const Auth: React.FC = (props) => {
  const { children } = props;
  const { dispatch: dispatchUserStoreState } = useUserStore();
  const [loading, setLoading] = useState(true);

  /**
   * 初始化用户信息
   */
  useEffect(() => {
    let state = {};
    BaseCommonApi.getAccountInfo().then(result => {
      state = Object.assign(state, result);
      return LiveApi.getLiveAuthToken({
        userID: result.accountId,
        deviceID: encodeURIComponent(window.navigator.userAgent)
      });
    }).then(result => {
      state = Object.assign(state, result);
      dispatchUserStoreState({
        type: 'PATCH',
        payload: state
      });
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return <div className="auth">
    {
      loading ? <Spin className="auth-loading" tip="数据正在拼命加载中..."/> : children
    }
  </div>;
};
