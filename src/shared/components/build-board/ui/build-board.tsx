import type { FC, ReactNode } from 'react';
import { Group, Rect } from 'react-konva';
import { useGameBoardStore } from 'shared/config/model/store/game-board-store.ts';

interface BuildBoardProps {
	children: ReactNode;
}
export const BuildBoard: FC<BuildBoardProps> = ({ children }) => {
	const { tileSide, buildBoardSide } = useGameBoardStore(
		(state) => state.gameBoardOptions,
	);
	return (
		<Group
			x={tileSide * 3}
			y={tileSide}
		>
			<Rect
				width={tileSide * buildBoardSide}
				height={tileSide * buildBoardSide}
				strokeWidth={2}
				stroke={'#88f'}
				cornerRadius={20}
			/>
			{children}
		</Group>
	);
};
