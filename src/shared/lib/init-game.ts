import axios from 'axios';
import { BACKEND_URL } from 'shared/config/api/urls.ts';
import { TILE_SIZE } from '../config/game/game';
import type { TileProps } from 'shared/components/tile';

interface initGameReturnType {
	tiles: TileProps[];
	sessionId: string;
}

export async function initGame(): Promise<initGameReturnType> {
	const response = await axios.put(`${BACKEND_URL}/game/session/`, {
		id: '64b02417767b7b027207e2cc',
	});

	const sessionId = response.data.id;

	const tiles = response.data.tiles.map(
		(tileId: string, sequenceNumber: number): TileProps => ({
			id: tileId,
			x: TILE_SIZE * -2,
			y: sequenceNumber * TILE_SIZE,
			queue: sequenceNumber + 1,
			// x: snap(Math.random() * TILE_SIZE * (BOARD_SIDE - 1)),
			// y: snap(Math.random() * TILE_SIZE * (BOARD_SIDE - 1)),
			url: `${BACKEND_URL}/tile/${tileId}`,
			isDragging: false,
			valid: false,
		}),
	);

	return { tiles, sessionId };
}
