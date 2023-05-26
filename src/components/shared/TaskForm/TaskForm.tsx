import { DatePickerProps, Form, message } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  UiButton,
  UiCheckbox,
  UiDataPicker,
  UiInput,
  UiInputTextArea,
  UiModal,
  UiSelect,
} from 'src/components/ui';
import { useActions, useSelectors } from 'src/hooks';
import { useAddTaskMutation } from 'src/store/index.endpoints';
import { lowerCase } from 'src/utils';

import './taskForm.scss';

const TaskForm: React.FC = () => {
  const [dateValue, setDateValue] = React.useState('');
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const [addTask, { isLoading, isSuccess, isError }] = useAddTaskMutation();

  const { modalShow } = useSelectors();
  const { toggleModal } = useActions();

  const onChangeDataPicker: DatePickerProps['onChange'] = (_, dateString) => {
    setDateValue(dateString);
  };

  const onModalCancel = () => {
    toggleModal(false);
    form.resetFields();
  };

  const onFinish = async (values: any) => {
    await addTask({
      ...values,
      completed: !!values.completed,
      important: !!values.important,
      date: dateValue,
    });
  };
  React.useEffect(() => {
    if (isSuccess) {
      message.success('Успешно Добавлён');
      form.resetFields();
      toggleModal(false);
    }
    if (isError) {
      message.error('Что-то пошло не так');
      form.resetFields();
      toggleModal(false);
    }
  }, [form, isError, isSuccess, toggleModal]);

  return (
    <UiModal
      title={t('addTask')}
      open={modalShow}
      footer={false}
      onCancel={onModalCancel}
      centered
    >
      <Form
        form={form}
        name="task"
        className="task-form"
        initialValues={{ remember: true }}
        layout="vertical"
        onFinish={onFinish}
        size="large"
      >
        <Form.Item
          label={t('formTitle')}
          name="title"
          rules={[
            {
              required: true,
              message: `${t('requiredMessage')} ${lowerCase(t('formTitle'))}!`,
            },
          ]}
        >
          <UiInput placeholder={`${t('formPlaceholderEg')}`} />
        </Form.Item>
        <Form.Item
          label={t('formDate')}
          name="date"
          rules={[
            {
              required: true,
              message: `${t('requiredMessage')} ${lowerCase(t('formDate'))}!`,
            },
          ]}
        >
          <UiDataPicker
            onChange={onChangeDataPicker}
            placeholder={`${t('selectDate')}`}
          />
        </Form.Item>
        <Form.Item
          label={t('formDescription')}
          name="description"
          rules={[
            {
              required: true,
              message: `${t('requiredMessage')} ${lowerCase(
                t('formDescription'),
              )}!`,
            },
          ]}
        >
          <UiInputTextArea placeholder={`${t('formPlaceholderEg')}`} />
        </Form.Item>
        <Form.Item
          label={t('formDirectory')}
          name="dir"
          rules={[
            {
              required: true,
              message: `${t('requiredMessage')} ${lowerCase(t('formTitle'))}!`,
            },
          ]}
        >
          <UiSelect
            placeholder={t('selectDirectory')}
            options={[
              { value: 'Main', label: 'Main' },
              { value: 'Music', label: 'Music' },
            ]}
          />
        </Form.Item>
        <Form.Item name="important" valuePropName="checked">
          <UiCheckbox>{t('markImportant')}</UiCheckbox>
        </Form.Item>
        <Form.Item name="completed" valuePropName="checked">
          <UiCheckbox>{t('markCompeleted')}</UiCheckbox>
        </Form.Item>

        <Form.Item>
          <UiButton loading={isLoading} block htmlType="submit">
            {t('addTask')}
          </UiButton>
        </Form.Item>
      </Form>
    </UiModal>
  );
};

export { TaskForm };
