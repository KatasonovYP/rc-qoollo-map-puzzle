import axios from 'axios';
import { BACKEND_URL } from 'shared/config/api/urls.ts';
interface CheckPlacementReturnType {
	valid: boolean;
	ended: boolean;
	gameId: string | undefined;
}

export async function checkPlacement(
	sessionId: string,
	tileId: string,
	position?: number,
): Promise<CheckPlacementReturnType> {
	if (position === undefined) {
		return {
			valid: false,
			ended: false,
			gameId: undefined,
		};
	}
	const response = await axios.post(
		`${BACKEND_URL}/game/session/${sessionId}`,
		{ tileId, position },
	);
	return response.data;
}
