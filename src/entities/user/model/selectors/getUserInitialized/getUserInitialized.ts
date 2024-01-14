import { TStateSchema } from 'app/providers/store-provider';

export const getUserInitialized = (state: TStateSchema) =>
  state.user._initialized;
