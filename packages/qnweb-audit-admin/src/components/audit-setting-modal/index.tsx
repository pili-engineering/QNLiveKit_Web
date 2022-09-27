import React, { useEffect } from 'react';
import {
  Button,
  Checkbox,
  Col,
  Form,
  InputNumber,
  Modal,
  ModalProps,
  Row,
  Space,
  FormProps,
  CheckboxOptionType
} from 'antd';
import classNames from 'classnames';

import './index.scss';

type tagOptionValue = 'pulp' | 'terror' | 'politician' | 'ads';

const tagOptions: Array<(Omit<CheckboxOptionType, 'value'> & {
  value: tagOptionValue
}) | string | number> = [
  { label: '涉黄', value: 'pulp', disabled: true },
  { label: '暴恐', value: 'terror' },
  { label: '敏感人物', value: 'politician' },
  { label: '广告', value: 'ads' },
];

export interface AuditSettingValues {
  /**
   * 截帧间隔
   */
  interval?: number;
  /**
   * AI审核内容
   */
  tags?: tagOptionValue[];
}

export type AuditSettingModalProps = Omit<ModalProps, 'onOk'> & {
  /**
   * 初始值
   */
  initialValues?: AuditSettingValues;
  /**
   * 确认按钮loading
   */
  okButtonLoading?: boolean;
  /**
   * 点击确认按钮
   */
  onOk?: FormProps<AuditSettingValues>['onFinish'];
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

const prefixCls = 'audit-setting-modal';

export const AuditSettingModal: React.FC<AuditSettingModalProps> = (props) => {
  const {
    className,
    visible, initialValues, okButtonLoading,
    onCancel, onOk,
    ...restProps
  } = props;
  const [form] = Form.useForm<AuditSettingValues>();

  /**
   * 清除表单数据
   */
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        form.resetFields();
      });
    }
  }, [visible]);

  return <Modal
    className={classNames(prefixCls, className)}
    title="审核设置"
    visible={visible}
    footer={null}
    onCancel={onCancel}
    {...restProps}
  >
    <Form
      form={form}
      {...formItemLayout}
      onFinish={onOk}
      initialValues={initialValues}
    >
      <Form.Item
        label="截帧间隔"
        name="interval"
        extra="请输入1-60间的整数"
        colon={false}
      >
        <InputNumber addonAfter="秒" min={1} max={60}/>
      </Form.Item>
      <Form.Item
        label="AI审核内容"
        name="tags"
        colon={false}
      >
        <Checkbox.Group options={tagOptions}/>
      </Form.Item>

      <Row className={`${prefixCls}-footer`}>
        <Col span={24}>
          <Space size={10}>
            <Button loading={okButtonLoading} htmlType="submit" type="primary">确定</Button>
            <Button onClick={onCancel}>取消</Button>
          </Space>
        </Col>
      </Row>
    </Form>
  </Modal>;
};
