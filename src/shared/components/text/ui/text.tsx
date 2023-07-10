import { FC, ReactNode } from 'react';
import cls from './text.module.css';

interface TextProps {
	size: 'md' | 'xl';
	children: ReactNode;
}

export const Text: FC<TextProps> = (props) => {
	const { size, children } = props;
	return <p className={`${cls.text} ${cls[size]}`}>{children}</p>;
};
