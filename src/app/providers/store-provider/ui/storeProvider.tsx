import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { TStateSchema } from '../config/stateSchema';

type TStoreProviderProps = PropsWithChildren<{
  initialState?: DeepPartial<TStateSchema>;
}>;

export const StoreProvider = (props: TStoreProviderProps) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as TStateSchema);

  return <Provider store={store}>{children}</Provider>;
};
