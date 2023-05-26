import { ConfigProvider, Menu, MenuProps } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useActions, useResponsive, useSelectors } from 'src/hooks';

import { getRoutes } from '../../../routes';

import { useDrawerMode } from './useDrawerMode';

const DrawerRouteMenu: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { mode, drawerShowRoute } = useSelectors();
  const { toggleDrawerRoute } = useActions();
  const { isMobile } = useResponsive(1200);
  const theme = useDrawerMode(mode);
  const routes = getRoutes();

  const onClickRoute: MenuProps['onClick'] = (e) => {
    navigate(e.key);
    if (isMobile) {
      toggleDrawerRoute(!drawerShowRoute);
    }
  };
  return (
    <ConfigProvider theme={{ token: theme }}>
      <Menu mode="inline" selectedKeys={[pathname]} onClick={onClickRoute} items={routes} />
    </ConfigProvider>
  );
};

export { DrawerRouteMenu };
