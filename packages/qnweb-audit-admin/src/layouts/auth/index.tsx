import React, { CSSProperties, Fragment, useEffect } from 'react';
import { useRequest } from 'ahooks';
import { Spin } from 'antd';

import { AdminApi } from '@/api';
import { defaultLoginConfig } from '@/config';

const style: CSSProperties = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

const MAIN_VERSION = mainVersion;

export const Auth: React.FC = (props) => {
  const { loading } = useRequest(() => {
    if (localStorage.getItem('Authorization')) {
      return Promise.resolve();
    }
    return AdminApi.postManagerLogin({
      user_name: defaultLoginConfig.username,
      password: defaultLoginConfig.password,
    }).then(result => {
      localStorage.setItem('Authorization', result.data?.access_token || '');
    });
  });

  useEffect(() => {
    document.title += MAIN_VERSION;
  }, []);

  return <Fragment>
    {loading ? <Spin style={style} spinning={loading}/> : props.children}
  </Fragment>;
};
