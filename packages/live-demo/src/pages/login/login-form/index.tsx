import React from 'react';
import classNames from 'classnames';
import { Button, Form, Input } from 'antd';

import IconChecked from './icon-checked.svg';
import IconUnchecked from './icon-unchecked.svg';
import BgPNG from './login-card-bg.png';

import './index.scss';

export interface LoginData {
  /**
   * 手机号
   */
  phone: string;
  /**
   * 验证码
   */
  smsCode: string;
  /**
   * 是否阅读相关协议
   */
  checked: boolean;
}

interface LoginFormProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit' | 'onChange'> {
  /**
   * 表单数据
   */
  data: LoginData;
  /**
   * 表单数据改变触发的事件
   * @param value
   */
  onChange: (value: LoginData) => void;
  /**
   * 点击获取验证码按钮
   */
  onSmsClick: () => Promise<void> | void;
  /**
   * 点击登录按钮
   * @param data
   */
  onSubmit: (data: LoginData) => void;
  /**
   * 点击欢迎登录标题
   */
  onHeaderClick?: () => void;
  /**
   * 登录按钮loading
   */
  isLoading: boolean;
  /**
   * 获取验证码按钮loading
   */
  isSmsLoading: boolean;
  /**
   * 倒计时
   */
  countdown?: number;
}

/**
 * 登录表单
 * @param props
 * @constructor
 */
export const LoginForm: React.FC<LoginFormProps> = props => {
  const {
    className, data,
    onHeaderClick,
    onChange, onSmsClick, onSubmit,
    isLoading, isSmsLoading, countdown, ...restProps
  } = props;

  return <div className={classNames('login-form', className)} {...restProps}>
    <div className="left">
      <img src={BgPNG} alt="登录表单背景图"/>
    </div>
    <div className="right">
      <h1 className="header" onClick={onHeaderClick}>
        <span className="bar"/>
        <span className="text">欢迎登录</span>
        <span className="bar bar-mirror"/>
      </h1>
      <div className="body">
        <Form
          layout="vertical"
        >
          <Form.Item
            label="手机号"
            style={{ marginBottom: 10 }}
          >
            <Input
              className="base-input"
              bordered={false}
              placeholder="请输入手机号"
              value={data.phone}
              onChange={event => {
                const value = event.target.value;
                onChange({
                  ...data,
                  phone: value,
                });
              }}
            />
          </Form.Item>

          <div className="tip">
            未注册用户可以手机号直接登录
          </div>

          <Form.Item
            label="验证码"
          >
            <div className="captcha">
              <Input
                bordered={false}
                placeholder="请输入验证码"
                className="sms-input base-input"
                value={data.smsCode}
                onChange={event => {
                  onChange({
                    ...data,
                    smsCode: event.target.value
                  });
                }}
              />
              {
                countdown && countdown > 0 ?
                  <Button type="link" className="countdown-button">{countdown}s</Button> :
                  <Button
                    type="link"
                    onClick={onSmsClick}
                    className="countdown-button"
                    loading={isSmsLoading}
                  >获取验证码</Button>
              }
            </div>
          </Form.Item>

          <Form.Item style={{ marginBottom: '16px' }}>
            <Button
              block
              className="button"
              type="primary"
              htmlType="submit"
              onClick={() => onSubmit(data)}
              loading={isLoading}
            >登录</Button>
          </Form.Item>

          <Form.Item>
            <div className="agreement-check" onClick={() => onChange({ ...data, checked: !data.checked })}>
              <img
                src={data.checked ? IconChecked : IconUnchecked}
                alt={`icon-checked-${data.checked}`}
              />
              <span className="agreement">
                <span>我已阅读并同意</span>
                <a
                  className="blank-link"
                  target="_blank"
                  href="https://www.qiniu.com/user-agreement"
                  rel="noreferrer"
                >《七牛云服务用户协议》</a>
                <span>和</span>
                <a
                  className="blank-link"
                  target="_blank"
                  href="https://www.qiniu.com/privacy-right"
                  rel="noreferrer">《隐私权政策》</a>
              </span>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>;
};
