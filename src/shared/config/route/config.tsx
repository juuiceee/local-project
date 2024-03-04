import { AboutPage } from 'pages/about-page';
import { ArticleDetailsPage } from 'pages/article-details-page';
import { ArticlesPage } from 'pages/articles-page';
import { MainPage } from 'pages/main-page';
import { NotFoundPage } from 'pages/not-found-page';
import { ProfilePage } from 'pages/profile-page';
import { RouteProps } from 'react-router-dom';

export type TAppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum EAppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
}

export const routePath: Record<EAppRoutes, string> = {
  [EAppRoutes.MAIN]: '/',
  [EAppRoutes.ABOUT]: '/about',
  [EAppRoutes.PROFILE]: '/profile',
  [EAppRoutes.ARTICLES]: '/articles',
  [EAppRoutes.ARTICLE_DETAILS]: '/articles', // +id

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
    path: routePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  {
    path: `${routePath.article_details}/:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
];
