import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { reducer } from './custom/custom.slice';
import { api } from './index.api';

const reducers = combineReducers({ custom: reducer, [api.reducerPath]: api.reducer });

export const store = configureStore({
  reducer: reducers,
  devTools: import.meta.env.MODE !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
