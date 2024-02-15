import { RouteProps } from 'react-router-dom';
// pages
import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';
import { NotFoundPage } from 'pages/not-found-page';

export enum EAppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export type TRoutePaths = Record<EAppRoutes, string>;

export type TRouteConfig = Record<EAppRoutes, RouteProps>;

export const routePaths: TRoutePaths = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.ABOUT]: '/about',
    [EAppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: TRouteConfig = {
    [EAppRoutes.MAIN]: {
        path: routePaths.main,
        element: <MainPage />,
    },

    [EAppRoutes.ABOUT]: {
        path: routePaths.about,
        element: <AboutPage />,
    },

    [EAppRoutes.NOT_FOUND]: {
        path: routePaths.not_found,
        element: <NotFoundPage />,
    },
};
