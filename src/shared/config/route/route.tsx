import { type RouteProps } from 'react-router-dom';
import { Landing } from 'pages/landing';
import { NotFound } from 'pages/not-found';
import { Game } from 'pages/game';
import { Results } from 'pages/results';
import { GameOptions } from 'pages/game-options';
import { PreviewMap } from 'pages/preview-map';

export enum AppRoutes {
	LANDING = 'main',
	GAME_OPTIONS = 'game-options',
	PREVIEW_MAP = 'preview',
	GAME = 'game',
	RESULTS = 'results',
	NOT_FOUNT = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.LANDING]: '/',
	[AppRoutes.GAME_OPTIONS]: `/${AppRoutes.GAME_OPTIONS}`,
	[AppRoutes.PREVIEW_MAP]: `/${AppRoutes.PREVIEW_MAP}`,
	[AppRoutes.GAME]: `/${AppRoutes.GAME}`,
	[AppRoutes.RESULTS]: `/${AppRoutes.RESULTS}`,
	[AppRoutes.NOT_FOUNT]: '*',
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.LANDING]: {
		path: RoutePath[AppRoutes.LANDING],
		element: <Landing />,
	},
	[AppRoutes.PREVIEW_MAP]: {
		path: RoutePath[AppRoutes.PREVIEW_MAP],
		element: <PreviewMap />,
	},
	[AppRoutes.GAME_OPTIONS]: {
		path: RoutePath[AppRoutes.GAME_OPTIONS],
		element: <GameOptions />,
	},
	[AppRoutes.GAME]: {
		path: RoutePath[AppRoutes.GAME],
		element: <Game />,
	},
	[AppRoutes.RESULTS]: {
		path: RoutePath[AppRoutes.RESULTS],
		element: <Results />,
	},
	[AppRoutes.NOT_FOUNT]: {
		path: RoutePath[AppRoutes.NOT_FOUNT],
		element: <NotFound />,
	},
};
