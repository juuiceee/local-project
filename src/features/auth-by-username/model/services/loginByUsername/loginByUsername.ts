import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { TThunkConfig } from 'app/providers/store-provider';
import { TUser, userActions } from '../../../../../entities/user';

type TLoginByUsernameProps = {
  username: string;
  password: string;
};

export const loginByUsername = createAsyncThunk<
  TUser,
  TLoginByUsernameProps,
  TThunkConfig<string>
>(
  'login/loginByUsername',
  async (authData, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post<TUser>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data),
      );
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error_login');
    }
  },
);
