import axios from 'axios';
import { userActions } from 'entities/user';
import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
  test('success login', async () => {
    const user = { username: 'admin', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: user }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: 'admin',
      password: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(user));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('403 error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: 'admin',
      password: '1234',
    });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
