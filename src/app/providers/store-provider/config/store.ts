import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { TStateSchema } from './stateSchema';

export function createReduxStore(initialState?: TStateSchema) {
  return configureStore<TStateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
