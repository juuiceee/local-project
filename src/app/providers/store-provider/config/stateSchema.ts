import { TCounterSchema } from 'entities/counter';
import { TUserSchema } from 'entities/user';
import { TLoginSchema } from 'features/auth-by-username';

export type TStateSchema = {
  user: TUserSchema;
  counter: TCounterSchema;
  login: TLoginSchema;
};
