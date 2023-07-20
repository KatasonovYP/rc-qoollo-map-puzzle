import type { FC } from 'react';
import cls from './logo.module.css';
import LogoIco from 'shared/assets/images/qoollo.png';
import classNames from 'classnames';

interface LogoProps {
	className?: string;
}

export const Logo: FC<LogoProps> = (props) => {
	const { className = '' } = props;

	return (
		<div className={classNames(cls.logo, className)}>
			<img
				src={LogoIco}
				alt='Qoollo logo'
			></img>
		</div>
	);
};

