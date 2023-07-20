import type { FC } from 'react';
import { AuthButtonsContainer } from 'shared/components/auth-buttons-container';
import { UserInfo } from 'shared/components/user-info';

const parseURL = () => {
	var url = window.location;
	var urlSearch = new URLSearchParams(url.hash);
	var accessToken = urlSearch.get('#access_token');
	var userId = urlSearch.get('user_id');

	if (accessToken && userId) {
		localStorage.setItem('access_token', accessToken);
		localStorage.setItem('user_id', userId);

		return true;
	}

	return false;
};

const getAuthInfo = () => {
	//@ts-ignore
	window.vkCallBack = (result: any) => {
		if (result.response == null) {
			return;
		}

		const response = result.response[0];

		localStorage.setItem('user_photo', response.photo_100);
		localStorage.setItem('first_name', response.first_name);
		localStorage.setItem('last_name', response.last_name);
	};

	const accessToken = localStorage.getItem('access_token');
	const userId = localStorage.getItem('user_id');

	if ((accessToken && userId) == null) {
		return false;
	}

	var script = document.createElement('script');
	var get_request = `https://api.vk.com/method/users.get?user_ids=${userId}&fields=photo_100&access_token=${accessToken}&v=5.131&callback=vkCallBack`;
	script.src = get_request;

	document.getElementsByTagName('head')[0].appendChild(script);
};

export const AuthContainer: FC = () => {
	const id = parseURL();
	const authId = getAuthInfo();

	return id ? <UserInfo /> : <AuthButtonsContainer />;
};
