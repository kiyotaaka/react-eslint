import { Form } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { UiButton, UiInput, UiModal } from 'src/components/ui';
import { useActions, useSelectors } from 'src/hooks';

import './taskForm.scss';

const TaskForm: React.FC = () => {
  const { t } = useTranslation();

  const { modalShow } = useSelectors();
  const { toggleModal } = useActions();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <UiModal
      title={t('addTask')}
      open={modalShow}
      footer={false}
      onCancel={() => toggleModal(false)}
      centered
    >
      <Form
        name="task-form"
        initialValues={{ remember: true }}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <UiInput />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <UiButton htmlType="submit">Submit</UiButton>
        </Form.Item>
      </Form>
    </UiModal>
  );
};

export { TaskForm };
