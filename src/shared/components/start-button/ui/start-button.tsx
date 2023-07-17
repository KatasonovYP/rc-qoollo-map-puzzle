import { FC, ReactNode } from 'react';
import cls from './start-button.module.css';

interface StartButtonProps {
	children: ReactNode;
}

export const StartButton: FC<StartButtonProps> = (props) => {
	const { children } = props;
	return <button className={`${cls.start_button}`}>{children}</button>;
};

