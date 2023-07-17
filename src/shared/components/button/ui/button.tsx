import { FC, ReactNode } from 'react';
import cls from './button.module.css';

interface ButtonProps {
	theme: 'start' | 'free';
	children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
	const { theme, children } = props;
	return (
		<button className={`${cls.button} ${cls[theme]}`}>{children}</button>
	);
};
