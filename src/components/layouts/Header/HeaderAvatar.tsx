import { Avatar } from 'antd';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useActions, useSelectors } from 'src/hooks';

const HeaderAvatar: React.FC = () => {
  const { drawerShowInfo } = useSelectors();
  const { toggleDrawerInfo } = useActions();
  return (
    <Avatar
      size={35}
      icon={<FaUserAlt />}
      style={{ cursor: 'pointer' }}
      onClick={() => toggleDrawerInfo(!drawerShowInfo)}
    />
  );
};

export default HeaderAvatar;
