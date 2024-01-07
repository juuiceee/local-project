import { TStateSchema } from 'app/providers/store-provider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: DeepPartial<TStateSchema> = {
      counter: { value: 5 },
    };
    const result = getCounterValue(state as TStateSchema);

    expect(result).toEqual(5);
  });
});
