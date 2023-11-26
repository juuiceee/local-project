import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { RouteProps } from 'react-router-dom';

export enum EAppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routePath: Record<EAppRoutes, string> = {
  [EAppRoutes.MAIN]: '/',
  [EAppRoutes.ABOUT]: '/about',
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
];
