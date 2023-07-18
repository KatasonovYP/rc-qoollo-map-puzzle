import { FC, ReactNode } from 'react';
import cls from './disabled-button.module.css';

interface DisabledButtonProps {
	children: ReactNode;
}

export const DisabledButton: FC<DisabledButtonProps> = (props) => {
	const { children } = props;
	return (
		<button
			className={`${cls.disabled_button}`}
			disabled
		>
			{children}
		</button>
	);
};
