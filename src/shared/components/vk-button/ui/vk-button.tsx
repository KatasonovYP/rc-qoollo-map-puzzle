import type { FC, ReactNode } from 'react';
import cls from './vk-button.module.css';

interface VKButtonProps {
	children: ReactNode;
}

const vkAuthHandle = () => {
	const params = new URLSearchParams({
		response_type: 'token',
		client_id: '51708706',
		display: 'popup',
		redirect_uri: location.origin,
		scope: 'offline',
		v: '5.59',
	});
	location.replace(`https://oauth.vk.com/authorize?${params}`);
};

export const VKButton: FC<VKButtonProps> = (props) => {
	const { children } = props;
	return (
		<button
			className={cls.vk_button}
			onClick={vkAuthHandle}
		>
			{children}
		</button>
	);
};
