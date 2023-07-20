import { FC, ReactNode } from 'react';
import cls from './vk-button.module.css';

interface VKButtonProps {
    children: ReactNode;
}

const vk_auth = () => {
	location.replace(
		`https://oauth.vk.com/authorize?response_type=token&client_id=51702229&display=popup&redirect_uri=${location.origin}/&scope=offline&v=5.59`,
	);
};

export const VKButton: FC<VKButtonProps> = (props) => {
	const { children } = props;
	return (
		<button className={`${cls.vk_button}`} onClick={vk_auth}>{children}</button>
	);
};