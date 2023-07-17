import { FC } from 'react';
import { Group, Rect } from 'react-konva';
import { TILE_SIZE } from 'shared/config/game/game.ts';

export const TilesFeed: FC = () => {
	return (
		<Group
			x={TILE_SIZE}
			y={TILE_SIZE}
		>
			<Rect
				width={TILE_SIZE}
				height={TILE_SIZE * 4}
				strokeWidth={2}
				stroke={'red'}
			/>
		</Group>
	);
};
