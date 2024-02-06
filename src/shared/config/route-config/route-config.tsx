import { RouteProps } from 'react-router-dom';
// pages
import { MainPage } from 'pages/main-page';
import { AboutPage } from 'pages/about-page';

export enum EAppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export type TRoutePaths = Record<EAppRoutes, string>;

export type TRouteConfig = Record<EAppRoutes, RouteProps>;

export const routePaths: TRoutePaths = {
    [EAppRoutes.MAIN]: '/',
    [EAppRoutes.ABOUT]: '/about',
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
};
