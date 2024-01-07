import { StoreProvider } from './ui/storeProvider';
import {
  createReduxStore,
  TAppDispatch,
  TThunkExtraArg,
  TThunkConfig,
} from './config/store';
import { TStateSchema, TReduxStoreWithManager } from './config/stateSchema';

export {
  StoreProvider,
  createReduxStore,
  TStateSchema,
  TReduxStoreWithManager,
  TAppDispatch,
  TThunkExtraArg,
  TThunkConfig,
};
