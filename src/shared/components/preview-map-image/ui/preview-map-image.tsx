import type { FC } from 'react';
import classNames from 'classnames';
import { BACKEND_URL } from 'shared/config/api/urls.ts';
import { useGameBoardStore } from 'shared/config/model/store/game-board-store.ts';

interface PreviewMapProps {
	className?: string;
}

export const PreviewMapImage: FC<PreviewMapProps> = ({ className }) => {
	const previewMapId = useGameBoardStore((state) => state.previewMapId);
	return (
		<div className={classNames(className)}>
			<img
				src={`${BACKEND_URL}/tile/${previewMapId}`}
				alt='whole map'
			/>
		</div>
	);
};
