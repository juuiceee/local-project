import { TStateSchema } from 'app/providers/store-provider';

export const getLoginUsername = (state: TStateSchema) => state.login?.username || '';
