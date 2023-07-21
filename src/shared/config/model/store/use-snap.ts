import { useGameBoardStore } from './game-board-store.ts';

export function useSnap() {
	const { tileSide, gameBoardSides } = useGameBoardStore(
		(state) => state.gameBoardOptions,
	);

	function tileRound(position: number) {
		const cell = tileSide;
		return Math.round(position / cell) * cell;
	}
	function snap(x: number, y: number) {
		let tileX = tileRound(x);
		let tileY = tileRound(y);
		tileX = Math.max(tileX, tileSide * -3);
		tileY = Math.max(tileY, tileSide * -1);
		tileX = Math.min(tileX, tileSide * gameBoardSides.x);
		tileY = Math.min(tileY, tileSide * gameBoardSides.y);
		return {
			x: tileX,
			y: tileY,
		};
	}
	return { snap };
}
