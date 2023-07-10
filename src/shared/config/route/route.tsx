import { type RouteProps } from 'react-router-dom';
import { Landing } from 'pages/landing';
import { NotFound } from 'pages/not-found';
import { Game } from 'pages/game';

export enum AppRoutes {
	Landing = 'main',
	GAME = 'game',
	NOT_FOUNT = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.Landing]: '/',
	[AppRoutes.GAME]: `/${AppRoutes.GAME}`,
	[AppRoutes.NOT_FOUNT]: '*',
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.Landing]: {
		path: RoutePath[AppRoutes.Landing],
		element: <Landing />,
	},
	[AppRoutes.GAME]: {
		path: RoutePath[AppRoutes.GAME],
		element: <Game />,
	},
	[AppRoutes.NOT_FOUNT]: {
		path: RoutePath[AppRoutes.NOT_FOUNT],
		element: <NotFound />,
	},
};
