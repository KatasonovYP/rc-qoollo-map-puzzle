import type { FC } from 'react';
import { useEffect } from 'react';
import { Tile } from 'shared/components/tile';
import { useGameBoardStore } from '../model/store/game-board-store.ts';
import { GameBoardStage } from 'shared/components/game-board-stage';
import { TilesFeed } from 'shared/components/tiles-feed';
import { BuildBoard } from 'shared/components/build-board';

export const GameBoard: FC = () => {
	const tiles = useGameBoardStore((state) => state.tiles);
	const startGame = useGameBoardStore((state) => state.startGame);

	useEffect(() => {
		startGame();
	}, []);

	return (
		<GameBoardStage>
			<TilesFeed />
			<BuildBoard>
				{tiles.map((tile, key) => (
					<Tile
						{...tile}
						key={key}
					/>
				))}
			</BuildBoard>
		</GameBoardStage>
	);
};
