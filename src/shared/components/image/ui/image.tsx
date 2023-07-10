import { FC } from 'react';
import cls from './image.module.css';
import LogoIco from '../../../assets/images/qoollo.png'

interface LogoProps {
    src?: string;
    className?: string;
}

export const Logo: FC<LogoProps> = (props) => {
	const { className='' } = props;

	return (
		<div className={`${cls.image} ${className}`}>
			<img
				src={LogoIco}
				alt='Qoollo'
			></img>
		</div>
	);
};
