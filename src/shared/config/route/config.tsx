import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { NotFoundPage } from 'pages/not-found-page';
import { ProfilePage } from 'pages/profile-page';
import { RouteProps } from 'react-router-dom';

type TAppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum EAppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const routePath: Record<EAppRoutes, string> = {
  [EAppRoutes.MAIN]: '/',
  [EAppRoutes.ABOUT]: '/about',
  [EAppRoutes.PROFILE]: '/profile',

  [EAppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Array<TAppRouteProps> = [
  {
    path: routePath.main,
    element: <MainPage />,
  },
  {
    path: routePath.about,
    element: <AboutPage />,
  },
  {
    path: routePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
];
