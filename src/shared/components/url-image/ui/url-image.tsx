import type { FC } from 'react';
import useImage from 'use-image';
import { Image } from 'react-konva';
import { useGameBoardStore } from 'shared/config/model/store/game-board-store.ts';

interface URLImageProps {
	url: string;
}

export const URLImage: FC<URLImageProps> = ({ url }) => {
	const [image] = useImage(url);
	const tileSide = useGameBoardStore(
		(state) => state.gameBoardOptions.tileSide,
	);
	return (
		<Image
			image={image}
			width={tileSide}
			height={tileSide}
		/>
	);
};
