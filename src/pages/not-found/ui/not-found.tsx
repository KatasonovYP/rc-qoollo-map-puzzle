import type { FC } from 'react';
import cls from './not-found.module.css';
import classNames from 'classnames';

interface NotFoundProps {
	className?: string;
}

export const NotFound: FC<NotFoundProps> = ({ className }) => {
	return (
		<div className={classNames(cls.notFound, className)}>
			<p>not found</p>
		</div>
	);
};
