import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { TStateSchema } from 'app/providers/store-provider';

type TActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: Dispatch;

  getState: () => TStateSchema;

  actionCreator: TActionCreatorType<Return, Arg, RejectedValue>;

  constructor(actionCreator: TActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);
    return result;
  }
}
