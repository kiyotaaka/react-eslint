import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/layouts/Layout';
import { routes } from './components/routes';
import { useAppSelector } from './hooks/useAppSelector';

import './styles/App.scss';

const App: React.FC = () => {
  const { mode } = useAppSelector((state) => state.custom);
  return (
    <div className={`app ${mode}`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};

export { App };
