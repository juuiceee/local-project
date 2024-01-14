import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { TAppRouteProps, routeConfig } from 'shared/config/route/config';
import { PageLoader } from 'widgets/page-loader';
import { RequireAuth } from './requireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: TAppRouteProps) => {
    const element = <div className="page-wrapper">{route.element}</div>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{routeConfig.map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
