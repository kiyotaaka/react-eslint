import React from 'react';
import { useSelectors } from 'src/hooks';

import './head.scss';

const Head: React.FC = () => {
  const { menuLabel } = useSelectors();
  if (menuLabel === '/') return null;
  return <h2 className="head">{menuLabel}</h2>;
};

export { Head };
