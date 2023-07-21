import type { FC } from 'react';
import classNames from 'classnames';
import cls from './map-slide.module.css';
import { BACKEND_URL } from '../../../../config/api/urls.ts';
import { useGameBoardStore } from '../../../../config/model/store/game-board-store.ts';

interface MapSlideProps {
	className?: string;
}

export const MapSlide: FC<MapSlideProps> = (props) => {
	const { className } = props;
	const previewMapId = useGameBoardStore((state) => state.previewMapId);

	return (
		<div className={classNames(cls.mapSlide, className)}>
			<img
				src={`${BACKEND_URL}/tile/${previewMapId}`}
				className={cls.backgroundImage}
				alt='map preview'
			/>
			<img
				src={`${BACKEND_URL}/tile/${previewMapId}`}
				className={cls.image}
				alt='map preview'
			/>
		</div>
	);
};
