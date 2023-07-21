import type { TileProps } from 'shared/components/tile';
import { create } from 'zustand';
import type { MapOptions } from 'shared/config/api/api-types';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { GameBoardOptions } from 'shared/config/game/game-types.ts';
import { initGame } from 'shared/lib/init-game.ts';

interface GameBoardState {
	tiles: TileProps[];
	sessionId: string;
	setTiles: (tiles: TileProps[]) => void;
	startGame: () => void;
	mapOptions: MapOptions;
	setMapOptions: (mapOptions: MapOptions) => void;
	gameBoardOptions: GameBoardOptions;
	setGameBoardOptions: (gameBoardOptions: GameBoardOptions) => void;
}

export const useGameBoardStore = create(
	persist<GameBoardState>(
		(set, get): GameBoardState => ({
			tiles: [],
			sessionId: '',
			mapOptions: {
				api: 'osm',
				geotag: 'Москва',
				scale: 'CITY',
				size: 2,
			},
			gameBoardOptions: {
				buildBoardSide: 4,
				tileFeedSize: 4,
				tileSide: 125,
				gameBoardSides: {
					x: 8,
					y: 6,
				},
			},

			startGame: async () => {
				const { tiles, sessionId, tileSide, buildBoardSide } =
					await initGame(get().mapOptions);
				set({
					tiles,
					sessionId,
					gameBoardOptions: {
						buildBoardSide,
						tileFeedSize: buildBoardSide,
						tileSide,
						gameBoardSides: {
							x: buildBoardSide + 4,
							y: buildBoardSide + 2,
						},
					},
				});
			},

			setTiles: (tiles: TileProps[]) => {
				set({ tiles });
			},

			setMapOptions: (mapOptions) => {
				set({ mapOptions });
			},

			setGameBoardOptions: (gameBoardOptions) => {
				set({ gameBoardOptions });
			},
		}),
		{
			name: 'qoollo-puzzle-map',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
