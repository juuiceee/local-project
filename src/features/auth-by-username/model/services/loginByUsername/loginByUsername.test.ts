import { userActions } from 'entities/user';
import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk/testAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
  test('success login', async () => {
    const user = { username: 'admin', id: '1' };
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ data: user }));

    const result = await thunk.callThunk({
      username: 'admin',
      password: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(user));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('403 error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({
      username: 'admin',
      password: '1234',
    });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
