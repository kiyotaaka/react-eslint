/* eslint-disable react/jsx-one-expression-per-line */
import { Drawer } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { UiButton } from 'src/components/ui';
import { useActions, useAppSelector, useResponsive } from 'src/hooks';

import { DrawerMenu } from './Menu/Menu';

import './drawer.scss';

const DrawerComp: React.FC = () => {
  const [isDrawer, setIsDrawer] = React.useState(false);

  const { mode, drawerShow } = useAppSelector((s) => s.custom);

  const { isMobile } = useResponsive(992);
  const { toggleDrawer } = useActions();
  const { t } = useTranslation();

  const onCloseDrawer = () => {
    toggleDrawer(!drawerShow);
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
          <UiButton>{t('addText')}</UiButton>
        </div>
        <div className="drawer__menu">
          <DrawerMenu />
        </div>
      </div>
    </Drawer>
  );
};
export { DrawerComp };
