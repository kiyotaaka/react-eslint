import Cookies from 'js-cookie';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICustomType } from './custom.types';

const mode = Cookies.get('mode');

const initialState: ICustomType = {
  mode: mode === 'dark' ? 'dark' : 'light',
  drawerShowRoute: true,
  drawerShowInfo: true,
};

const customSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleColorMode(state, { payload }: PayloadAction<'dark' | 'light'>) {
      if (payload === 'light') {
        Cookies.set('mode', (state.mode = 'light'));
      } else {
        Cookies.set('mode', (state.mode = 'dark'));
      }
    },
    toggleDrawerRoute(state, { payload }: PayloadAction<boolean>) {
      state.drawerShowRoute = payload;
    },
    toggleDrawerInfo(state, { payload }: PayloadAction<boolean>) {
      state.drawerShowInfo = payload;
    },
  },
});
export const { reducer, actions } = customSlice;
