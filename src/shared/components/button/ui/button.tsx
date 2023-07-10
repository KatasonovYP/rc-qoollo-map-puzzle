import { FC, ReactNode } from 'react';
import cls from './button.module.css';

interface ButtonProps {
	rounded: 'start' | 'free';
	children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
	const { rounded, children } = props;
	return (
		<button className={`${cls.button} ${cls[rounded]}`}>{children}</button>
	);
};
