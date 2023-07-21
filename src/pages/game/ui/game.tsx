import type { FC } from 'react';
import { GameBoard } from 'widgets/game-board';

interface GameProps {
	className?: string;
}

const Game: FC<GameProps> = () => {
	return (
		<div>
			{/*<AboutGameStartSlider />*/}
			<GameBoard />
		</div>
	);
};

export default Game;
