import { useGameBoardStore } from './game-board-store.ts';

export function useGetPosition() {
	const { tileSide, buildBoardSide } = useGameBoardStore(
		(state) => state.gameBoardOptions,
	);
	function getPosition(x: number, y: number) {
		if (
			x < 0 ||
			y < 0 ||
			x > (buildBoardSide - 1) * tileSide ||
			y > (buildBoardSide - 1) * tileSide
		) {
			return undefined;
		}

		return (y / tileSide) * buildBoardSide + x / tileSide;
	}
	return { getPosition };
}
