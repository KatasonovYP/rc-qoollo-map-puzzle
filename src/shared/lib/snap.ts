import { BOARD_SIDE, TILE_SIZE } from 'shared/config/game/game.ts';

export function snap(x: number, y: number) {
	let tileX = tileRound(x);
	let tileY = tileRound(y);
	tileX = Math.max(tileX, TILE_SIZE * -3);
	tileY = Math.max(tileY, TILE_SIZE * -1);
	tileX = Math.min(tileX, TILE_SIZE * BOARD_SIDE);
	tileY = Math.min(tileY, TILE_SIZE * BOARD_SIDE);
	return {
		x: tileX,
		y: tileY,
	};
}

function tileRound(position: number) {
	const cell = TILE_SIZE;
	return Math.round(position / cell) * cell;
}
