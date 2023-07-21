import type { FC } from 'react';
import { AuthButtonsContainer } from 'shared/components/auth-buttons-container';
import { UserInfo } from 'shared/components/user-info';

const parseURL = () => {
	const url = window.location;
	const urlSearch = new URLSearchParams(url.hash);
	const accessToken = urlSearch.get('#access_token');
	const userId = urlSearch.get('user_id');

	if (accessToken && userId) {
		localStorage.setItem('access_token', accessToken);
		localStorage.setItem('user_id', userId);

		return true;
	}

	return false;
};

const getAuthInfo = () => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	window.vkCallBack = (result: { response: Record<string, string>[] }) => {
		if (result.response === null) {
			return;
		}

		const response = result.response[0];

		localStorage.setItem('user_photo', response.photo_100);
		localStorage.setItem('first_name', response.first_name);
		localStorage.setItem('last_name', response.last_name);
	};

	const accessToken = localStorage.getItem('access_token');
	const userId = localStorage.getItem('user_id');

	if (accessToken === null || userId === null) {
		return false;
	}

	const script = document.createElement('script');
	const params = new URLSearchParams({
		user_ids: userId,
		fields: 'photo_100',
		access_token: accessToken,
		v: '5.131',
		callback: 'vkCallBack',
	});
	script.src = `https://api.vk.com/method/users.get?${params}`;

	document.getElementsByTagName('head')[0].appendChild(script);
};

export const AuthContainer: FC = () => {
	const id = parseURL();
	getAuthInfo();

	return id ? <UserInfo /> : <AuthButtonsContainer />;
};
