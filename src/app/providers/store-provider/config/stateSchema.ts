import { TCounterSchema } from 'entities/counter';
import { TUserSchema } from 'entities/user';

export type TStateSchema = {
  counter: TCounterSchema;
  user: TUserSchema;
};
