'use client';

import { FC, useRef, ReactNode } from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistedStore, AppStore } from '@/redux/store';

interface Props {
  children: ReactNode;
}

const StoreProvider: FC<Props> = ({ children }) => {
  const storeRef = useRef<AppStore>(store);

  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={persistedStore}>{children}</PersistGate>
    </Provider>
  );
};

export default StoreProvider;
