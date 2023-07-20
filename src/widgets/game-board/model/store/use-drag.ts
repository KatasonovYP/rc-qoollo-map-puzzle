import type { KonvaEventObject } from 'konva/lib/Node';
import { useGameBoardStore } from 'shared/config/model/store/game-board-store.ts';
import {
	SAFE_POSITION,
	TILE_FEED_X_POSITION,
} from 'shared/config/game/game-types.ts';
import { checkPlacement } from 'shared/lib/check-placement.ts';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/route/route.tsx';
import { useSnap } from 'shared/config/model/store/use-snap.ts';
import { useGetPosition } from '../../../../shared/config/model/store/use-get-position.ts';

export function useDrag() {
	const tiles = useGameBoardStore((state) => state.tiles);
	const setTiles = useGameBoardStore((state) => state.setTiles);
	const sessionId = useGameBoardStore((state) => state.sessionId);
	const { tileSide } = useGameBoardStore((state) => state.gameBoardOptions);
	const navigate = useNavigate();
	const { getPosition } = useGetPosition();
	const { snap } = useSnap();

	function handleDragStart(event: KonvaEventObject<DragEvent>): void {
		const id = event.target.id();
		setTiles(
			tiles.map((tile) => {
				if (id === tile.id) {
					return {
						...tile,
						x: SAFE_POSITION, // fix visual bug + fix near snap bug
						y: SAFE_POSITION, // fix visual bug + fix near snap bug
						queue: 0,
						isDragging: !tile.valid,
					};
				}
				return tile;
			}),
		);
	}

	async function handleDragEnd(event: KonvaEventObject<DragEvent>) {
		const id = event.target.id();
		event.target.moveToTop();
		const { x, y } = snap(event.target.x(), event.target.y());
		const position = getPosition(x, y);
		const { valid, ended } = await checkPlacement(sessionId, id, position);

		if (valid) {
			event.target.moveToBottom();
		} else {
			event.target.moveToTop();
		}
		let sequenceNumber = 1;
		setTiles(
			tiles.map((tile) => {
				if (id === tile.id) {
					if (x !== tile.x) {
						return {
							...tile,
							x,
							y,
							valid,
							queue: 0,
							isDragging: false,
						};
					}
				} else if (tile.queue !== 0) {
					return {
						...tile,
						x: tileSide * TILE_FEED_X_POSITION,
						y: tileSide * (sequenceNumber - 1),
						queue: sequenceNumber++,
						isDragging: false,
					};
				}
				return {
					...tile,
					isDragging: false,
				};
			}),
		);
		if (ended) {
			// deleteSession(sessionId);
			navigate(RoutePath.results);
		}
	}

	return { handleDragStart, handleDragEnd };
}
