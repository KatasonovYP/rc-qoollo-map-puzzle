import type { TileProps } from 'shared/components/tile';
import { create } from 'zustand';
import { initGame } from 'shared/lib/init-game.ts';

const { tiles, sessionId } = await initGame();

interface GameBoardState {
	tiles: TileProps[];
	sessionId: string;
	setTiles: (tiles: TileProps[]) => void;
	startGame: () => void;
}

export const useGameBoardStore = create<GameBoardState>(
	(set): GameBoardState => ({
		tiles,
		sessionId,
		setTiles: (tiles: TileProps[]) => {
			set({ tiles });
		},
		startGame: async () => {
			const { tiles, sessionId } = await initGame();
			set({ tiles, sessionId });
		},
	}),
);
