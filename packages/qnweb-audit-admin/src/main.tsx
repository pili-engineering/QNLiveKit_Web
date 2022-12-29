import 'moment/dist/locale/zh-cn';
import 'antd/dist/antd.css';

import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import ReactDOM from 'react-dom';

import { Router } from './router';

import './styles/index.scss';

moment.locale('zh-cn');

ReactDOM.render(
	<ConfigProvider locale={zhCN}>
		<Router />
	</ConfigProvider>,
	document.getElementById('root')
);
