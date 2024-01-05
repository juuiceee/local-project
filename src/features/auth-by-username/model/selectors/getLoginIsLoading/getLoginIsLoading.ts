import { TStateSchema } from 'app/providers/store-provider';

export const getLoginIsLoading = (state: TStateSchema) => state.login?.isLoading || false;
