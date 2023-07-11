import type { FC } from 'react';
import cls from './spinner.module.css';
import classNames from 'classnames';

interface SpinnerProperties {
	className?: string;
}

export const Spinner: FC<SpinnerProperties> = ({ className }) => {
	return <div className={classNames(cls.spinner, className)} />;
};
