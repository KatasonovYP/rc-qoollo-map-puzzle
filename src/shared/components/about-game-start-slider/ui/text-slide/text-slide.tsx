import type { FC } from 'react';
import classNames from 'classnames';
import cls from './text-slide.module.css';

interface TextSlideProps {
	className?: string;
}

export const TextSlide: FC<TextSlideProps> = (props) => {
	const { className } = props;

	return (
		<div className={classNames(cls.textSlide, className)}>
			<h1>TextSlide</h1>
		</div>
	);
};
