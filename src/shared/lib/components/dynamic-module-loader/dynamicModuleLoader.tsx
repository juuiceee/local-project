import { Reducer } from '@reduxjs/toolkit';
import { TReduxStoreWithManager } from 'app/providers/store-provider';
import { TStateSchemaKey } from 'app/providers/store-provider/config/stateSchema';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useStore } from 'react-redux';

export type TReducersList = {
  [name in TStateSchemaKey]?: Reducer;
};

type ReducersListEntry = [TStateSchemaKey, Reducer];

type TDynamicModuleLoaderProps = PropsWithChildren<{
  reducers: TReducersList;
  removeAfterUnmount?: boolean;
}>;

export const DynamicModuleLoader: FC<TDynamicModuleLoaderProps> = (
  props: TDynamicModuleLoaderProps,
) => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as TReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      store.reducerManager.add(reducerKey as TStateSchemaKey, reducer);
    });
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerKey]) => {
          store.reducerManager.remove(reducerKey as TStateSchemaKey);
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
