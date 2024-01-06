import { TAppDispatch } from 'app/providers/store-provider';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
