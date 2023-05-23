import React from 'react';
import { useDispatch } from 'react-redux';

import { bindActionCreators } from '@reduxjs/toolkit';

import { actions as customs } from '../store/custom/custom.slice';

const rootActions = {
  ...customs,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return React.useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
