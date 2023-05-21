import React from 'react';
import { useAppSelector } from 'src/hooks';

import './head.scss';

const Head: React.FC = () => {
  const { menuLabel } = useAppSelector((s) => s.custom);
  if (menuLabel === '/') return null;
  return <h2 className="head">{menuLabel}</h2>;
};

export { Head };
