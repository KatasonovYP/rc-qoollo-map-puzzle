import type { FC } from 'react';
import useImage from 'use-image';
import { Image } from 'react-konva';
import { TILE_SIZE } from 'shared/config/game/game.ts';

interface URLImageProps {
	url: string;
}

export const URLImage: FC<URLImageProps> = ({ url }) => {
	const [image] = useImage(url);
	return (
		<Image
			image={image}
			width={TILE_SIZE}
			height={TILE_SIZE}
		/>
	);
};
