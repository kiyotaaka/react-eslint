import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdAdd } from 'react-icons/io';
import { Outlet } from 'react-router-dom';
import { useAppSelector, useResponsive } from 'src/hooks';

import { UiFloatButton } from '../ui';

import { DrawerComp } from './Drawer/Drawer';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

import './Layout.scss';

const Layout: React.FC = () => {
  const { drawerShow } = useAppSelector((state) => state.custom);
  const { isMobile } = useResponsive(992);
  const { t } = useTranslation();
  return (
    <div className="layout">
      <DrawerComp />
      <main className={clsx('main', !drawerShow && 'main active')}>
        <Header />
        <Outlet />
        <Footer />
      </main>
      {isMobile && <UiFloatButton icon={<IoMdAdd />} tooltip={t('addText')} />}
    </div>
  );
};

export { Layout };
