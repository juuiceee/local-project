import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk/testAsyncThunk';
import { ECountry } from 'entities/country';
import { ECurrency } from 'entities/currency';
import { fetchProfileData } from './fetchProfileData';

const data = {
  username: 'admin',
  age: 21,
  city: 'Moscow',
  country: ECountry.RU,
  currency: ECurrency.RUB,
  name: 'Ivan',
  surname: 'Ivanov',
};

describe('fetchProfileData', () => {
  test('success fetch', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('403 error login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
