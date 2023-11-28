import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { NotFoundPage } from 'pages/not-found-page';
import { RouteProps } from 'react-router-dom';

export enum EAppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const routePath: Record<EAppRoutes, string> = {
  [EAppRoutes.MAIN]: '/',
  [EAppRoutes.ABOUT]: '/about',

  [EAppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Array<RouteProps> = [
  {
    path: routePath.main,
    element: <MainPage />,
  },
  {
    path: routePath.about,
    element: <AboutPage />,
  },
  {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
];
