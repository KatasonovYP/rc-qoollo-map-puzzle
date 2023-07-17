import type { FC } from 'react';
import { Group } from 'react-konva';
import { URLImage } from 'shared/components/url-image';
import { useDrag } from 'widgets/game-board/model/store/use-drag.ts';
import { TILE_FEED_SIZE } from 'shared/config/game/game.ts';

export interface TileProps {
	id: string;
	x: number;
	y: number;
	queue: number;
	valid: boolean;
	url: string;
	isDragging: boolean;
}
export const Tile: FC<TileProps> = (props) => {
	const { id, x, y, url, isDragging, valid, queue } = props;
	const { handleDragStart, handleDragEnd } = useDrag();
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
			visible={queue <= TILE_FEED_SIZE}
		>
			<URLImage url={url} />
		</Group>
	);
};
