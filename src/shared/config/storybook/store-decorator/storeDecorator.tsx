import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StoreProvider, TStateSchema } from 'app/providers/store-provider';
import { loginReducer } from 'features/auth-by-username/model/slices/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<TStateSchema>> = {
  login: loginReducer,
};

export const StoreDecorator =
  (
    state: DeepPartial<TStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<TStateSchema>>,
  ) => (StoryComponent: Story) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  );
