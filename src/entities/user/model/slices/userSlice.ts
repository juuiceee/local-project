import { createSlice } from '@reduxjs/toolkit';
import { TUserSchema } from '../types/user';

const initialState: TUserSchema = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
