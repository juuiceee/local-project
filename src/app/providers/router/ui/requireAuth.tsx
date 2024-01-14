import { getUserAuthData } from 'entities/user';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { routePath } from 'shared/config/route/config';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isAuth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={routePath.main} state={{ from: location }} replace />;
  }

  return children;
};
