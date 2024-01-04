import { TStateSchema } from 'app/providers/store-provider';
import { TCounterSchema } from '../../types/counterSchema';

export const getCounter = (state: TStateSchema): TCounterSchema =>
  state.counter;
