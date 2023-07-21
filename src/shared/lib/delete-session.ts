import axios from 'axios';
import { BACKEND_URL } from '../config/api/urls.ts';

export function deleteSession(sessionId: string) {
	axios
		.delete(`${BACKEND_URL}/game/session/${sessionId}`)
		.catch(console.error);
}
