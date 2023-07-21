import type { FC } from 'react';
import { GameBoard } from 'widgets/game-board';
import { AboutGameStartSlider } from 'shared/components/about-game-start-slider';

interface GameProps {
	className?: string;
}

const Game: FC<GameProps> = () => {
	return (
		<div>
			<AboutGameStartSlider />
			<GameBoard />
		</div>
	);
};

export default Game;
