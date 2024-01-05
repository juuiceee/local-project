import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { loginReducer } from 'features/auth-by-username';
import { counterReducer } from '../../../../entities/counter';
import { userReducer } from '../../../../entities/user/index';
import { TStateSchema } from './stateSchema';

export function createReduxStore(initialState?: TStateSchema) {
  const rootReducers: ReducersMapObject<TStateSchema> = {
    user: userReducer,
    counter: counterReducer,
    login: loginReducer,
  };

  return configureStore<TStateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
