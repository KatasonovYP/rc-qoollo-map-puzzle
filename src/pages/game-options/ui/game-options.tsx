import type { FC } from 'react';
import { FormGameOptions } from 'widgets/form-game-options';

const GameOptions: FC = () => {
	return (
		<div>
			<h1>Game Options</h1>
			<FormGameOptions />
		</div>
	);
};

// eslint-disable-next-line import/no-default-export
export default GameOptions;
