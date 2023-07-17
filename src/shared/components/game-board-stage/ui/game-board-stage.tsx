import type { FC, ReactNode } from 'react';
import { Layer, Stage } from 'react-konva';
import { TILE_SIZE } from 'shared/config/game/game.ts';

interface GameBoardStageProps {
	children: ReactNode;
}

export const GameBoardStage: FC<GameBoardStageProps> = ({ children }) => {
	return (
		<Stage
			className={'stage'}
			width={TILE_SIZE * 8}
			height={TILE_SIZE * 6}
		>
			<Layer>{children}</Layer>
		</Stage>
	);
};
