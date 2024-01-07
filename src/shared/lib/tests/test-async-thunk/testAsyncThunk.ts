import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { TStateSchema } from 'app/providers/store-provider';
import axios, { AxiosStatic } from 'axios';

type TActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: Dispatch;

  getState: () => TStateSchema;

  actionCreator: TActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: jest.MockedFn<any>;

  constructor(actionCreator: TActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });
    return result;
  }
}
