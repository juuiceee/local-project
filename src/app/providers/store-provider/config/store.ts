import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from '../../../../entities/counter';
import { userReducer } from '../../../../entities/user/index';
import { TStateSchema } from './stateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: TStateSchema,
  asyncReducers?: ReducersMapObject<TStateSchema>,
) {
  const rootReducers: ReducersMapObject<TStateSchema> = {
    ...asyncReducers,
    user: userReducer,
    counter: counterReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<TStateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
