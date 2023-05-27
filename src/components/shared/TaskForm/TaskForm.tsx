/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable operator-linebreak */
import { DatePickerProps, Form, message } from 'antd';
import dayjs from 'dayjs';
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
import { useAddTaskMutation, useEditTaskMutation } from 'src/store/index.endpoints';
import { TTaskItem } from 'src/store/tasks/tasks.types';
import { dateFormat, lowerCase } from 'src/utils';

import './taskForm.scss';

const TaskForm: React.FC = () => {
  const [dateValue, setDateValue] = React.useState('');
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const [addTask, { isLoading: addLoading, isSuccess: addSuccess, isError: addError }] =
    useAddTaskMutation();
  const [editTask, { isLoading: editLoading, isSuccess: editSuccess, isError: editError }] =
    useEditTaskMutation();

  const { modalShow, task } = useSelectors();
  const { toggleModal, setTask } = useActions();

  const onChangeDataPicker: DatePickerProps['onChange'] = (_, dateString) => {
    setDateValue(dateString);
  };

  const onModalCancel = () => {
    toggleModal(false);
    form.resetFields();
  };

  const onFinish = async (values: TTaskItem) => {
    if (task) {
      await editTask({ ...values, id: task.id });
    } else {
      await addTask({
        ...values,
        completed: !!values.completed,
        important: !!values.important,
        date: dateValue,
      });
    }
  };
  React.useEffect(() => {
    if (addSuccess) {
      message.success(t('successTask'));
      form.resetFields();
      toggleModal(false);
    }
    if (editSuccess) {
      message.success(t('successEditTask'));
      form.resetFields();
      toggleModal(false);
    }
    if (addError || editError) {
      message.error(t('errorTask'));
      form.resetFields();
      toggleModal(false);
    }
  }, [addError, addSuccess, editError, editSuccess]);

  React.useEffect(() => {
    if (task) {
      form.setFieldsValue({
        ...task,
        date: dayjs(task.date, dateFormat),
      });
    }
  }, [form, task]);
  React.useEffect(() => {
    if (!modalShow) {
      form.resetFields();
      setTask(null);
    }
  }, [form, modalShow]);

  return (
    <UiModal
      title={task ? t('editTask') : t('addTask')}
      open={modalShow}
      footer={false}
      onCancel={onModalCancel}
      centered
    >
      <Form
        form={form}
        name="task"
        className="task-form"
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
            format={dateFormat}
          />
        </Form.Item>
        <Form.Item
          label={t('formDescription')}
          name="description"
          rules={[
            {
              required: true,
              message: `${t('requiredMessage')} ${lowerCase(t('formDescription'))}!`,
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
          <UiButton loading={task ? editLoading : addLoading} block htmlType="submit">
            {task ? t('editTask') : t('addTask')}
          </UiButton>
        </Form.Item>
      </Form>
    </UiModal>
  );
};

export { TaskForm };
