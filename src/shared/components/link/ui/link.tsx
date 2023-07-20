import type { FC, ReactNode } from 'react';
import cls from './link.module.css';

interface LinkProps {
	children: ReactNode;
}

export const Link: FC<LinkProps> = (props) => {
	const { children } = props;
	return <a className={`${cls.link}`} href='#'>{children}</a>;
};
