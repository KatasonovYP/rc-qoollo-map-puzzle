import type { KonvaEventObject } from 'konva/lib/Node';
import { useGameBoardStore } from './game-board-store.ts';
import { snap } from 'shared/lib/snap.ts';
import { TILE_SIZE } from 'shared/config/game/game.ts';
import { checkPlacement } from 'shared/lib/check-placement.ts';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/route/route.tsx';
import { getPosition } from 'shared/lib/get-position.ts';

export function useDrag() {
	const tiles = useGameBoardStore((state) => state.tiles);
	const setTiles = useGameBoardStore((state) => state.setTiles);
	const sessionId = useGameBoardStore((state) => state.sessionId);
	const navigate = useNavigate();

	function handleDragStart(event: KonvaEventObject<DragEvent>): void {
		const id = event.target.id();
		setTiles(
			tiles.map((tile) => {
				if (id === tile.id) {
					return {
						...tile,
						x: -1000, // fix visual bug + fix near snap bug
						y: -1000, // fix visual bug + fix near snap bug
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
		const x = snap(event.target.x());
		const y = snap(event.target.y());
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
						x: TILE_SIZE * -2,
						y: TILE_SIZE * (sequenceNumber - 1),
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
