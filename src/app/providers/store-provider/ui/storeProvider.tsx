import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
import { TStateSchema } from '../config/stateSchema';

type TStoreProviderProps = PropsWithChildren<{
  initialState?: DeepPartial<TStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<TStateSchema>>;
}>;

export const StoreProvider = (props: TStoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const navigate = useNavigate();

  const store = createReduxStore(
    initialState as TStateSchema,
    asyncReducers as ReducersMapObject<TStateSchema>,
    navigate,
  );

  return <Provider store={store}>{children}</Provider>;
};
