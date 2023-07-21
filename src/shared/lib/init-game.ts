import axios from 'axios';
import { BACKEND_URL } from 'shared/config/api/urls.ts';
import type { TileProps } from 'shared/components/tile';
import type { MapOptions } from 'shared/config/api/api-types.ts';

interface initGameReturnType {
	sessionId: string;
	tiles: TileProps[];
	tileSide: number;
	buildBoardSide: number;
	previewMapId: string;
}

interface mapCallReturnType {
	id: string;
	size: number;
	previewId: string;
	geotag: string;
	scale: string;
}

export async function initGame({
	api,
	geotag,
	size,
	scale,
}: MapOptions): Promise<initGameReturnType> {
	try {
		const mapResponse = await axios.get(`${BACKEND_URL}/map`, {
			params: { api, geotag, scale, size },
		});
		const {
			id: mapId,
			size: buildBoardSide,
			previewId: previewMapId,
		}: mapCallReturnType = mapResponse.data[0];

		const tileSide: number = Math.round(500 / buildBoardSide);

		const sessionResponse = await axios.put(
			`${BACKEND_URL}/game/session/`,
			{ id: mapId },
		);

		const sessionId = sessionResponse.data.id;

		const startTile: { id: string; position: number } =
			sessionResponse.data.start;

		const tiles: TileProps[] = sessionResponse.data.tiles.map(
			(tileId: string, sequenceNumber: number): TileProps => ({
				id: tileId,
				x: tileSide * -2,
				y: sequenceNumber * tileSide,
				queue: sequenceNumber + 1,
				url: `${BACKEND_URL}/tile/${tileId}`,
				isDragging: false,
				valid: false,
			}),
		);

		tiles.push({
			valid: true,
			queue: 0,
			isDragging: false,
			y: Math.floor(startTile.position / buildBoardSide) * tileSide,
			x: (startTile.position % buildBoardSide) * tileSide,
			url: `${BACKEND_URL}/tile/${startTile.id}`,
			id: startTile.id,
		});

		return {
			tiles,
			sessionId,
			tileSide,
			buildBoardSide,
			previewMapId,
		};
	} catch (error) {
		console.error(error);
		throw new Error('init error');
	}
}
