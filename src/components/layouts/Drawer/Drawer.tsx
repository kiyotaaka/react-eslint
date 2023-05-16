/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @typescript-eslint/indent */
// eslint-disable-next-line object-curly-newline
import { ConfigProvider, Drawer, Menu, MenuProps } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { UiButton } from 'src/components/ui';
import { useActions } from 'src/hooks/useActions';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { useResponsive } from 'src/hooks/useResponsive';

import { routes } from '../routes';

import './drawer.scss';

const DrawerComp: React.FC = () => {
  const [isDrawer, setIsDrawer] = React.useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { mode, drawerShow } = useAppSelector((s) => s.custom);

  const { isMobile } = useResponsive(992);
  const { toggleDrawer } = useActions();
  const { t } = useTranslation();

  const onCloseDrawer = () => {
    toggleDrawer(!drawerShow);
  };

  const onClickRoute: MenuProps['onClick'] = (e) => {
    navigate(e.key);
    if (isMobile) {
      toggleDrawer(!drawerShow);
    }
  };

  React.useEffect(() => {
    if (isMobile) setIsDrawer(!drawerShow);
    else setIsDrawer(drawerShow);
  }, [drawerShow, isMobile]);

  return (
    <Drawer
      placement="left"
      width={256}
      onClose={onCloseDrawer}
      closable={false}
      zIndex={200}
      open={isDrawer}
      mask={isMobile}
    >
      <div className={clsx('drawer', `drawer ${mode}`)}>
        <div className="drawer__submenu">
          <h2>{t('title')} 🔥</h2>
          <UiButton>Добавить новую задачу</UiButton>
        </div>
        <div className="drawer__menu">
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
        </div>
      </div>
    </Drawer>
  );
};
export { DrawerComp };
