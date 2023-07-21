import type { FC } from 'react';
import { GameBoard } from 'widgets/game-board';

interface GameProps {
	className?: string;
}

const Game: FC<GameProps> = () => {
	return (
		<div>
			<GameBoard />
		</div>
	);
};

// eslint-disable-next-line import/no-default-export
export default Game;
