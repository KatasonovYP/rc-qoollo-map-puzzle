import type { FC } from 'react';
import { Group, Rect } from 'react-konva';
import { useGameBoardStore } from 'shared/config/model/store/game-board-store.ts';

export const TilesFeed: FC = () => {
	const { tileSide, tileFeedSize } = useGameBoardStore(
		(state) => state.gameBoardOptions,
	);
	return (
		<Group
			x={tileSide}
			y={tileSide}
		>
			<Rect
				width={tileSide}
				height={tileSide * tileFeedSize}
				strokeWidth={2}
				stroke={'red'}
			/>
		</Group>
	);
};
