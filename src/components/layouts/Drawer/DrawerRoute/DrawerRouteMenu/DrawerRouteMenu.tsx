import { ConfigProvider, Menu, MenuProps } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useActions, useResponsive, useSelectors } from 'src/hooks';

import { getRoutes } from '../../../routes';

import { drawerMode } from './drawerMode';

const DrawerRouteMenu: React.FC = () => {
  const { mode, drawerShowRoute } = useSelectors();
  const { toggleDrawerRoute } = useActions();
  const { pathname } = useLocation();
  const { isMobile } = useResponsive(1200);
  const modeDrawer = drawerMode(mode);
  const routes = getRoutes();
  const navigate = useNavigate();
  const onClickRoute: MenuProps['onClick'] = (e) => {
    navigate(e.key);
    if (isMobile) {
      toggleDrawerRoute(!drawerShowRoute);
    }
  };
  return (
    <ConfigProvider theme={{ token: modeDrawer }}>
      <Menu mode="inline" selectedKeys={[pathname]} onClick={onClickRoute} items={routes} />
    </ConfigProvider>
  );
};

export { DrawerRouteMenu };
