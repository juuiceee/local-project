import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { TStateSchema } from './stateSchema';

export function createReduxStore(initialState?: TStateSchema) {
  const rootReducers: ReducersMapObject<TStateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<TStateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
