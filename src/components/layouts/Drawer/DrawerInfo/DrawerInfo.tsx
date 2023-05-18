/* eslint-disable react/jsx-one-expression-per-line */
import { Avatar, Drawer } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsMoonStarsFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';
import { UiButton, UiSlider, UiSwitch } from 'src/components/ui';
import { useActions, useAppSelector, useResponsive } from 'src/hooks';

import './drawer-info.scss';

const DrawerInfo: React.FC = () => {
  const [isDrawer, setIsDrawer] = React.useState(false);

  const { mode, drawerShowInfo } = useAppSelector((s) => s.custom);

  const { isMobile } = useResponsive(992);
  const { toggleDrawerInfo, toggleColorMode } = useActions();
  const { t } = useTranslation();

  const onCloseDrawer = () => {
    toggleDrawerInfo(!drawerShowInfo);
  };

  const onChangeMode = (checked: boolean) => {
    if (checked) toggleColorMode('dark');
    else toggleColorMode('light');
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
            <UiSwitch
              checked={mode === 'dark'}
              onChange={onChangeMode}
              checkedChildren={<BsMoonStarsFill color="#fff" />}
              unCheckedChildren={<MdSunny color="yellow" />}
            />
          </div>
          <div className="drawer-info__status">
            <div className="drawer-info__status-info">
              <span>All tasks</span>
              <span>2/3</span>
            </div>
            <UiSlider max={5} tooltip={{ formatter: null }} />
          </div>
        </div>
        <div className="drawer-info__bottom">
          <a href="https://github.com/kiyotaaka" target="_blank" rel="noreferrer">
            {t('authorName')}
          </a>
        </div>
      </div>
    </Drawer>
  );
};
export { DrawerInfo };
