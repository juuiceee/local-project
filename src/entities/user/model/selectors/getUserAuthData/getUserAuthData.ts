import { TStateSchema } from 'app/providers/store-provider';

export const getUserAuthData = (state: TStateSchema) => state.user.authData;
