import type { FC, ReactNode } from 'react';
import cls from './user-logo.module.css';

export const UserLogo: FC = () => {
	return (
		<img
			className={`${cls.user_logo}`}
			src={localStorage.getItem('user_photo')}
			alt='User photo'
		></img>
	);
};
