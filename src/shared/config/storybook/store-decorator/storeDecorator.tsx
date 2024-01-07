import { Story } from '@storybook/react';
import { StoreProvider, TStateSchema } from 'app/providers/store-provider';
import { TReducersList } from 'shared/lib/components/dynamic-module-loader/dynamicModuleLoader';
import { loginReducer } from 'features/auth-by-username/model/slices/loginSlice';
import { profileReducer } from '../../../../entities/profile';

const defaultAsyncReducers: TReducersList = {
  login: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (state: DeepPartial<TStateSchema>, asyncReducers?: TReducersList) => (StoryComponent: Story) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  );
