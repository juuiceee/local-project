import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TProfile, TProfileSchema } from '../types/profile';

const initialState: TProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<TProfile>) => {
      state.data = action.payload;
    },
  },
});

export const { actions: profileActions, reducer: profileReducer } =
  profileSlice;
