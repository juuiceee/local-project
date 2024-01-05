import { TStateSchema } from 'app/providers/store-provider';

export const getLoginPassword = (state: TStateSchema) => state.login?.password || '';
