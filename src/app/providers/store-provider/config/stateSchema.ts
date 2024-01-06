import { EnhancedStore } from '@reduxjs/toolkit';
import { TCounterSchema } from 'entities/counter';
import { TUserSchema } from 'entities/user';
import { TLoginSchema } from 'features/auth-by-username';
import { TProfileSchema } from 'entities/profile';
import { createReducerManager } from './reducerManager';

export type TStateSchema = {
  user: TUserSchema;
  counter: TCounterSchema;

  // Async reducers
  login?: TLoginSchema;
  profile?: TProfileSchema;
};

export type TStateSchemaKey = keyof TStateSchema;

export type TReducerManager = ReturnType<typeof createReducerManager>;

export type TReduxStoreWithManager = {
  reducerManager: TReducerManager;
} & EnhancedStore<TStateSchema>;
