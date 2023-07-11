import { FC, ImgHTMLAttributes } from 'react';
import cls from './hero-image.module.css';


interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

export const HeroImage: FC<ImageProps> = (props) => {
	const { className='', ...otherProps } = props;

	return (
		<div className={`${cls.heroImage} ${className}`}>
			<img
				{...otherProps}
			></img>
		</div>
	);
};
