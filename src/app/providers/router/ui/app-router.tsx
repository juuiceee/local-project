import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/route/config';

const AppRouter = () => (
  <Suspense fallback={<></>}>
    <Routes>
      {routeConfig.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<div className="page-wrapper">{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;