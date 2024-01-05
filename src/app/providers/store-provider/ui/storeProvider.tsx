import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { TStateSchema } from '../config/stateSchema';

type TStoreProviderProps = PropsWithChildren<{
  initialState?: DeepPartial<TStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<TStateSchema>>;
}>;

export const StoreProvider = (props: TStoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const store = createReduxStore(
    initialState as TStateSchema,
    asyncReducers as ReducersMapObject<TStateSchema>,
  );

  return <Provider store={store}>{children}</Provider>;
};
