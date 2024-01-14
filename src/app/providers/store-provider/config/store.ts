import {
  CombinedState,
  Reducer,
  ReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';
import { AxiosInstance } from 'axios';
import { $api } from 'shared/api/api';
import { counterReducer } from '../../../../entities/counter';
import { userReducer } from '../../../../entities/user/index';
import { TStateSchema } from './stateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: TStateSchema,
  asyncReducers?: ReducersMapObject<TStateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducers: ReducersMapObject<TStateSchema> = {
    ...asyncReducers,
    user: userReducer,
    counter: counterReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<TStateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate,
        },
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export type TThunkExtraArg = {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
};

export type TThunkConfig<T> = {
  rejectValue: T;
  extra: TThunkExtraArg;
  state: TStateSchema;
};
