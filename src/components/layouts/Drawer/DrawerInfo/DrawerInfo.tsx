/* eslint-disable react/jsx-one-expression-per-line */
import { Avatar, Drawer } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaUserAlt } from 'react-icons/fa';
import { useActions, useResponsive, useSelectors } from 'src/hooks';

import { DrawerInfoSwitch } from './DrawerInfoSwitch/DrawerInfoSwitch';

import './drawer-info.scss';

const DrawerInfo: React.FC = () => {
  const [isDrawer, setIsDrawer] = React.useState(false);

  const { mode, drawerShowInfo } = useSelectors();

  const { isMobile } = useResponsive(1200);
  const { toggleDrawerInfo } = useActions();
  const { t } = useTranslation();

  const onCloseDrawer = () => {
    toggleDrawerInfo(!drawerShowInfo);
  };

  React.useEffect(() => {
    if (isMobile) setIsDrawer(!drawerShowInfo);
    else setIsDrawer(drawerShowInfo);
  }, [drawerShowInfo, isMobile]);

  return (
    <Drawer
      placement="right"
      width={200}
      onClose={onCloseDrawer}
      closable={false}
      zIndex={240}
      open={isDrawer}
      mask={isMobile}
    >
      <div className={clsx('drawer-info', `drawer-info ${mode}`)}>
        <div className="drawer-info__top">
          <div className="drawer-info__logo">
            <h3>{t('userTitle')}</h3>
            <Avatar size={35} icon={<FaUserAlt />} />
          </div>
          <div className="drawer-info__mode">
            <h3>{t('darkmode')}</h3>
            <DrawerInfoSwitch />
          </div>
          <div className="drawer-info__status">
            <div className="drawer-info__status-info">
              <span>{t('all')}</span>
              <span>2/3</span>
            </div>
            <div className="drawer-info__status-slider">
              <div style={{ width: '40%' }} />
            </div>
          </div>
        </div>
        <div className="drawer-info__bottom">
          <a href="https://github.com/kiyotaaka" target="_blank" rel="noreferrer">
            {t('author')}
          </a>
        </div>
      </div>
    </Drawer>
  );
};
export { DrawerInfo };
