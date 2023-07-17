import type { FC, ReactNode } from 'react';
import { Group, Rect } from 'react-konva';
import { TILE_SIZE } from 'shared/config/game/game.ts';

interface BuildBoardProps {
	children: ReactNode;
}
export const BuildBoard: FC<BuildBoardProps> = ({ children }) => {
	return (
		<Group
			x={TILE_SIZE * 3}
			y={TILE_SIZE}
		>
			<Rect
				width={TILE_SIZE * 4}
				height={TILE_SIZE * 4}
				strokeWidth={2}
				stroke={'#88f'}
				cornerRadius={20}
			/>
			{children}
		</Group>
	);
};
