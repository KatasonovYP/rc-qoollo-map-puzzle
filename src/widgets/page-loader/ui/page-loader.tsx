import type { FC } from 'react';
import { Spinner } from 'shared/components/spinner';
import cls from './page-loader.module.css';
import classNames from 'classnames';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
	return (
		<div className={classNames(cls.pageLoader, {}, [className])}>
			<Spinner />
		</div>
	);
};
