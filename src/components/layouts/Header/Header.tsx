import { Avatar, Badge } from 'antd';
import { Slant as Hamburger } from 'hamburger-react';
import Cookies from 'js-cookie';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillBellFill, BsMoonStarsFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { ImSearch } from 'react-icons/im';
import { MdSunny } from 'react-icons/md';
import { UiInput, UiSelect, UiSwitch } from 'src/components/ui';
import { useActions, useAppSelector, useResponsive } from 'src/hooks';

import './header.scss';

const Header: React.FC = () => {
  const { mode, drawerShow } = useAppSelector((state) => state.custom);
  const { toggleColorMode, toggleDrawer } = useActions();
  const { isMobile } = useResponsive(992);
  const { i18n, t } = useTranslation();

  const lang = Cookies.get('lang');

  const handleChangeLang = (value: string) => {
    i18n.changeLanguage(value);
    Cookies.set('lang', value);
  };

  const onChangeMode = (checked: boolean) => {
    if (checked) toggleColorMode('dark');
    else toggleColorMode('light');
  };
  return (
    <header className="header">
      <div className="header__inner">
        {isMobile ? (
          <Hamburger
            toggled={!drawerShow}
            color={mode === 'dark' ? '#e2e8f0' : '#0f172a'}
            onToggle={() => toggleDrawer(!drawerShow)}
          />
        ) : (
          <UiInput
            placeholder={`${t('placeholderSearch')}`}
            style={{ width: '300px' }}
            suffix={<ImSearch color="#94A3B8" size={18} />}
            size="large"
          />
        )}
        <div className="header__block">
          <Badge count={5} color="red" size="small">
            <BsFillBellFill color="#5B21B6" size={25} cursor="pointer" />
          </Badge>
          <UiSwitch
            checked={mode === 'dark'}
            onChange={onChangeMode}
            checkedChildren={<BsMoonStarsFill color="#fff" />}
            unCheckedChildren={<MdSunny color="yellow" />}
          />
          <UiSelect
            defaultValue={lang || 'RU'}
            onChange={handleChangeLang}
            options={[
              { value: 'RU', label: 'RU' },
              { value: 'EN', label: 'EN' },
              { value: 'QQ', label: 'QQ' },
            ]}
          />
          <Avatar size={35} icon={<FaUserAlt />} />
        </div>
      </div>
      {isMobile && (
        <UiInput
          placeholder={`${t('placeholderSearch')}`}
          suffix={<ImSearch color="#94A3B8" size={18} />}
          size="large"
        />
      )}
    </header>
  );
};

export { Header };
