import type { FC, ReactNode } from 'react';
import cls from './flex-container.module.css';

interface FlexContainerProps {
	element:
		| 'button'
		| 'hero-content'
		| 'hero-logo'
		| 'hero'
		| 'header'
		| 'navigation'
		| 'page';
	children: ReactNode;
}

export const FlexContainer: FC<FlexContainerProps> = (props) => {
	const { element, children } = props;
	return <div className={`${cls.flex} ${cls[element]}`}>{children}</div>;
};
