import type { FC, ReactNode } from 'react';
import cls from './text.module.css';

interface TextProps {
	size: 'sm' | 'md' | 'xl';
	color: 'black' | 'white';
	children: ReactNode;
}

export const Text: FC<TextProps> = (props) => {
	const { size, color, children } = props;
	return (
		<p className={`${cls.text} ${cls[size]} ${cls[color]}`}>{children}</p>
	);
};

