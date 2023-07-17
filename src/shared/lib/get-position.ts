import { BOARD_SIDE, TILE_SIZE } from '../config/game/game.ts';

export function getPosition(x: number, y: number) {
	if (
		x < 0 ||
		y < 0 ||
		x > (BOARD_SIDE - 1) * TILE_SIZE ||
		y > (BOARD_SIDE - 1) * TILE_SIZE
	) {
		return undefined;
	}

	return (y / TILE_SIZE) * BOARD_SIDE + x / TILE_SIZE;
}
