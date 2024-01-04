import { TUserSchema, TUser } from './model/types/user';
import { userReducer, userActions } from './model/slices/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export { TUserSchema, TUser, userReducer, userActions, getUserAuthData };
