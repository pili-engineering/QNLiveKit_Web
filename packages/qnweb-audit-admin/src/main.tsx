import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/dist/locale/zh-cn';

moment.locale('zh-cn');

import { Router } from './router';

import './styles/index.scss';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Router/>
  </ConfigProvider>,
  document.getElementById('root')
);
