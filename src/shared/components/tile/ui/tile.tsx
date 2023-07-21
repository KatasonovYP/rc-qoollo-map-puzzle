import type { FC } from 'react';
import { Group } from 'react-konva';
import { URLImage } from 'shared/components/url-image';
import { useDrag } from 'widgets/game-board/model/store/use-drag.ts';
import { useGameBoardStore } from 'shared/config/model/store/game-board-store.ts';

export interface TileProps {
	id: string;
	x: number;
	y: number;
	queue: number; // if = 0, then active. 1, 2, 3, 4 placed in feed
	valid: boolean; // is on right place. Checked from backend
	url: string; // image url
	isDragging: boolean; // using for effects on dragging
}
export const Tile: FC<TileProps> = (props) => {
	const { id, x, y, url, isDragging, valid, queue } = props;
	const { handleDragStart, handleDragEnd } = useDrag();
	const tileFeedSize = useGameBoardStore(
		(state) => state.gameBoardOptions.tileFeedSize,
	);
	return (
		<Group
			name={`tile ${id}`}
			x={x}
			y={y}
			key={id}
			id={id}
			draggable={!valid}
			shadowOffsetX={isDragging ? 10 : 5}
			shadowOffsetY={isDragging ? 10 : 5}
			scaleX={isDragging ? 1.2 : 1}
			scaleY={isDragging ? 1.2 : 1}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			opacity={0.8}
			shadowColor='black'
			shadowBlur={10}
			shadowOpacity={0.6}
			visible={queue <= tileFeedSize}
		>
			<URLImage url={url} />
		</Group>
	);
};