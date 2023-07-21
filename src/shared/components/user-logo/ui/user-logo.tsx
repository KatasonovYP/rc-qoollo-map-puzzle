import type { FC } from 'react';
import cls from './user-logo.module.css';
import cameraUrl from 'shared/assets/images/camera_50.png';

export const UserLogo: FC = () => {
	const userLogoUrl = localStorage.getItem('user_photo') || cameraUrl;
	return (
		<img
			className={cls.userLogo}
			src={userLogoUrl}
			alt='User photo'
		></img>
	);
};
