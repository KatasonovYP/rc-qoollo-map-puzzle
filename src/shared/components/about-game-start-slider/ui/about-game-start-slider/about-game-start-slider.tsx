import type { FC, ReactElement } from 'react';
import { useEffect, useState } from 'react';
import cls from './about-game-start-slider.module.css';
import classNames from 'classnames';
import { SlideWrapper } from '../slide-wrapper/slide-wrapper.tsx';
import { MapSlide } from '../map-slide/map-slide.tsx';

interface SlideSchedule {
	time: number;
	slide: ReactElement;
}

interface AboutGameStartSliderProps {
	className?: string;
}

export const AboutGameStartSlider: FC<AboutGameStartSliderProps> = ({
	className,
}) => {
	const slides: SlideSchedule[] = [
		{
			time: 2000,
			slide: (
				<h1>
					You will now be shown a map of the location of your choice
				</h1>
			),
		},
		{
			time: 2000,
			slide: <h1>And in a few seconds, the game will begin</h1>,
		},
		{
			time: 3000,
			slide: <MapSlide />,
		},
		{
			time: 1000,
			slide: <h1>3</h1>,
		},
		{
			time: 1000,
			slide: <h1>2</h1>,
		},
		{
			time: 1000,
			slide: <h1>1</h1>,
		},
		{
			time: 1000,
			slide: <h1>Good Luck!</h1>,
		},
	];
	const [currentSlideId, setCurrentSlideId] = useState(0);
	const [isShow, setIsShow] = useState(true);

	useEffect(() => {
		if (isShow) {
			setTimeout(() => {
				setCurrentSlideId((state) => state + 1);

				if (currentSlideId >= slides.length - 1) {
					setIsShow(false);
				}
			}, slides[currentSlideId].time);
		}
	}, [currentSlideId]);

	return (
		<>
			{currentSlideId >= slides.length ? null : (
				<SlideWrapper
					className={classNames(cls.aboutGameStartSlider, className)}
				>
					{slides[currentSlideId].slide}
				</SlideWrapper>
			)}
		</>
	);
};
