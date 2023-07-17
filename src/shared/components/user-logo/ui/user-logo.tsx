import type { FC, ReactNode } from 'react';
import cls from './user-logo.module.css';

export const UserLogo: FC = () => {
	return (
		<div className={`${cls.user_logo}`}>
			<img
				src={localStorage.getItem('user_photo')}
				alt='User photo'
			></img>
		</div>
	);
};
