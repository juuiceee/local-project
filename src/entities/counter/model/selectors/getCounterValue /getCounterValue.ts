import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { TCounterSchema } from '../../types/counterSchema';

export const getCounterValue = createSelector(
  getCounter,
  (counter: TCounterSchema) => counter.value,
);
