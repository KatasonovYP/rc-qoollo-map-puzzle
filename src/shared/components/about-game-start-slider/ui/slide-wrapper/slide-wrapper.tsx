import type { ReactNode, FC } from 'react';
import classNames from 'classnames';
import cls from './slide-wrapper.module.css';

interface SlideWrapperProps {
	children: ReactNode;
	className?: string;
}

export const SlideWrapper: FC<SlideWrapperProps> = (props) => {
	const { className, children } = props;
	return (
		<div className={classNames(cls.slideWrapper, className)}>
			{children}
		</div>
	);
};
