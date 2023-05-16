import clsx from 'clsx';
import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { useResponsive } from 'src/hooks/useResponsive';

import { UiFloatButton } from '../ui';

import { DrawerComp } from './Drawer/Drawer';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

import './Layout.scss';

const Layout: React.FC = () => {
  const { drawerShow } = useAppSelector((state) => state.custom);
  const { isMobile } = useResponsive(992);
  return (
    <div className="layout">
      <DrawerComp />
      <main className={clsx('main', !drawerShow && 'main active')}>
        <Header />
        <Outlet />
        <Footer />
      </main>
      {isMobile && <UiFloatButton icon={<IoMdAdd />} tooltip={<>Добавить новую задачу</>} />}
    </div>
  );
};

export { Layout };
