import type { FC, ReactNode } from 'react';
import { Layer, Stage } from 'react-konva';
import { useGameBoardStore } from 'shared/config/model/store/game-board-store.ts';

interface GameBoardStageProps {
	children: ReactNode;
}

export const GameBoardStage: FC<GameBoardStageProps> = ({ children }) => {
	const { tileSide, gameBoardSides } = useGameBoardStore(
		(state) => state.gameBoardOptions,
	);

	return (
		<Stage
			className={'stage'}
			width={tileSide * gameBoardSides.x}
			height={tileSide * gameBoardSides.y}
		>
			<Layer>{children}</Layer>
		</Stage>
	);
};
