import { TLoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('setUsername', () => {
    const state: DeepPartial<TLoginSchema> = {
      username: '',
    };

    expect(
      loginReducer(state as TLoginSchema, loginActions.setUsername('ad')),
    ).toEqual({
      username: 'ad',
    });
  });

  test('setPassword', () => {
    const state: DeepPartial<TLoginSchema> = {
      password: '',
    };

    expect(
      loginReducer(state as TLoginSchema, loginActions.setPassword('555')),
    ).toEqual({
      password: '555',
    });
  });
});
