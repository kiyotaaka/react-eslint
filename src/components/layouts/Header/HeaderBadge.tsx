import { Badge } from 'antd';
import React from 'react';
import { BsFillBellFill } from 'react-icons/bs';

const HeaderBadge: React.FC = () => (
  <Badge count={5} color="red" size="small">
    <BsFillBellFill color="#5B21B6" size={25} cursor="pointer" />
  </Badge>
);

export { HeaderBadge };
