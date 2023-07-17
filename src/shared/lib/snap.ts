import { TILE_SIZE } from 'shared/config/game/game.ts';

export function snap(position: number) {
	const cell = TILE_SIZE;
	return Math.round(position / cell) * cell;
}
