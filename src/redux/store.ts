import { configureStore } from '@reduxjs/toolkit';

import userSlice from './slices/userSlice';
import favoritesSlice from './slices/favoritesSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userSlice.reducer,
      favorites: favoritesSlice.reducer
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
