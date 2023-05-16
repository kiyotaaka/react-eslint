import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UiButton } from 'src/components/ui';

import notFound from '../../../assets/not-found.svg';

import './not-found.scss';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <img src={notFound} alt="404" />
      <div className="not-found__content">
        <h2>404</h2>
        <p>Извините, страница, которую вы посетили, не существует.</p>
        <UiButton onClick={() => navigate('/all')}>Назад</UiButton>
      </div>
    </div>
  );
};

export { NotFound };
