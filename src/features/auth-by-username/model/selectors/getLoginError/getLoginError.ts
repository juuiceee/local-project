import { TStateSchema } from 'app/providers/store-provider';

export const getLoginError = (state: TStateSchema) => state.login?.error;
