import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk/testAsyncThunk';
import { ECountry } from 'entities/country';
import { ECurrency } from 'entities/currency';
import { updateProfileData } from './updateProfileData';
import { EValidateProfileError } from '../../types/profile';

const data = {
  username: 'admin',
  age: 21,
  city: 'Moscow',
  country: ECountry.RU,
  currency: ECurrency.RUB,
  name: 'Ivan',
  surname: 'Ivanov',
};

describe('updateProfileData', () => {
  test('success update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data, isLoading: false, readonly: false },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('403 error login', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([EValidateProfileError.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, name: '' },
        isLoading: false,
        readonly: false,
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([EValidateProfileError.INCORRECT_USER_DATA]);
  });
});
