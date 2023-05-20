/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/indent */
import { ConfigProvider, Menu, MenuProps } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useActions, useAppSelector, useLabel, useResponsive } from 'src/hooks';

import { getRoutes } from '../../../routes';

const DrawerRouteMenu: React.FC = () => {
  const { mode, drawerShowRoute } = useAppSelector((s) => s.custom);
  const { toggleDrawerRoute } = useActions();
  const { pathname } = useLocation();
  const { isMobile } = useResponsive(992);
  const routes = getRoutes();
  const navigate = useNavigate();
  const onClickRoute: MenuProps['onClick'] = (e) => {
    navigate(e.key);
    if (isMobile) {
      toggleDrawerRoute(!drawerShowRoute);
    }
  };
  return (
    <ConfigProvider
      theme={{
        token:
          mode === 'dark'
            ? {
                colorBgBase: '#141E33',
                colorTextBase: '#8497AC',
                controlItemBgActive: '#1A253A',
                colorPrimary: '#E2E8F0',
              }
            : {
                colorBgBase: '#F1F5F9',
                colorTextBase: '#477880',
                controlItemBgActive: '#EDE9FE',
                colorPrimary: '#F43F5E',
              },
      }}
    >
      <Menu mode="inline" selectedKeys={[pathname]} onClick={onClickRoute} items={routes} />
    </ConfigProvider>
  );
};

export { DrawerRouteMenu };
