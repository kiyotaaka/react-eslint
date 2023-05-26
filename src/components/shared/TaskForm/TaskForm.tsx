import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { UiButton, UiModal } from 'src/components/ui';
import { useActions, useSelectors } from 'src/hooks';

import { FormInput } from '../FormInput/FormInput';

import './taskForm.scss';

const TaskForm: React.FC = () => {
  const [data, setData] = React.useState<any>(null);
  const { handleSubmit, control } = useForm();
  const { t } = useTranslation();

  const { modalShow } = useSelectors();
  const { toggleModal } = useActions();
  return (
    <UiModal
      title={t('addTask')}
      open={modalShow}
      footer={false}
      onCancel={() => toggleModal(false)}
    >
      <form className="task-form" onSubmit={handleSubmit((data) => setData(data))}>
        <FormInput name="firstName" control={control} placeholder="firstName" />
        <FormInput name="lastName" control={control} placeholder="lastName" />
        <UiButton htmlType="submit">{t('addTask')}</UiButton>
      </form>
    </UiModal>
  );
};

export { TaskForm };
