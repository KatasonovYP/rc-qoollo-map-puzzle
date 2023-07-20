import type { FC } from 'react';
import cls from './vk-logo.module.css';
import VKIco from 'shared/assets/images/vk_logo.png';
import classNames from 'classnames';

export const VKLogo: FC = () => {
	return (
		<div className={classNames(cls.vk_logo)}>
			<img
				src={VKIco}
				alt='VK logo'
			></img>
		</div>
	);
};
