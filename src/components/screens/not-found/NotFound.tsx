import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { UiButton } from 'src/components/ui';

import notFound from '../../../assets/not-found.svg';

import './not-found.scss';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="not-found">
      <img src={notFound} alt="404" />
      <div className="not-found__content">
        <h2>404</h2>
        <p>{t('notFound')}</p>
        <UiButton onClick={() => navigate('/all')}>Назад</UiButton>
      </div>
    </div>
  );
};

export { NotFound };
