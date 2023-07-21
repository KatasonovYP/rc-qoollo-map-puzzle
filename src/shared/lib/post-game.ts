import axios from 'axios';
import { BACKEND_URL } from '../config/api/urls.ts';

export async function postGame(gameId: string) {
	const accessToken = localStorage.getItem('access_token');
	if (accessToken) {
		await axios.put(`${BACKEND_URL}/user`, {
			token: accessToken,
		});
		await axios.post(
			`${BACKEND_URL}/game/${gameId}`,
			{},
			{
				headers: {
					Token: accessToken,
				},
			},
		);
	} else {
		console.log('user not auth');
	}
}
