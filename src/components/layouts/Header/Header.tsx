import { Avatar, Badge } from 'antd';
import { Slant as Hamburger } from 'hamburger-react';
import Cookies from 'js-cookie';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillBellFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { ImSearch } from 'react-icons/im';
import { UiInput, UiSelect } from 'src/components/ui';
// eslint-disable-next-line object-curly-newline
import { useActions, useDebounce, useResponsive, useSelectors } from 'src/hooks';
import { todayDate } from 'src/utils';

import './header.scss';

const Header: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');
  const { i18n, t } = useTranslation();

  const { mode, drawerShowRoute, drawerShowInfo } = useSelectors();
  const { toggleDrawerRoute, toggleDrawerInfo, setSearchValue } = useActions();
  const { isMobile } = useResponsive(992);

  const debounceValue = useDebounce(inputValue, 200);

  const lang = Cookies.get('lang');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleChangeLang = (value: string) => {
    i18n.changeLanguage(value);
    Cookies.set('lang', value);
  };

  React.useEffect(() => {
    setSearchValue(debounceValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  return (
    <header className="header">
      <div className="header__inner">
        {isMobile ? (
          <Hamburger
            toggled={!drawerShowRoute}
            duration={0.3}
            color={mode === 'dark' ? '#e2e8f0' : '#0f172a'}
            onToggle={() => toggleDrawerRoute(!drawerShowRoute)}
          />
        ) : (
          <UiInput
            value={inputValue}
            onChange={handleChangeInput}
            placeholder={`${t('placeholderSearch')}`}
            style={{ width: '300px' }}
            suffix={<ImSearch color="#94A3B8" size={18} />}
            size="large"
          />
        )}
        <div className="header__title">
          {isMobile && <h4>{t('title')}</h4>}
          <p>{todayDate}</p>
        </div>
        <div className="header__block">
          <Badge count={5} color="red" size="small">
            <BsFillBellFill color="#5B21B6" size={25} cursor="pointer" />
          </Badge>
          <UiSelect
            defaultValue={lang || 'RU'}
            onChange={handleChangeLang}
            options={[
              { value: 'RU', label: 'RU' },
              { value: 'EN', label: 'EN' },
              { value: 'QQ', label: 'QQ' },
            ]}
          />
          {isMobile && (
            <Avatar
              size={35}
              icon={<FaUserAlt />}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleDrawerInfo(!drawerShowInfo)}
            />
          )}
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
