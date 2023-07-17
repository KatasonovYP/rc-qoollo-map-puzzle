import axios from 'axios';
import { BACKEND_URL } from 'shared/config/api/urls.ts';
interface CheckPlacementReturnType {
	valid: boolean;
	ended: boolean;
}

export async function checkPlacement(
	sessionId: string,
	tag: string,
	position?: number,
): Promise<CheckPlacementReturnType> {
	if (position === undefined) {
		return {
			valid: false,
			ended: false,
		};
	}
	const response = await axios.post(
		`${BACKEND_URL}/game/session/${sessionId}`,
		{ tag, position },
	);
	return {
		valid: response.data.valid,
		ended: response.data.ended,
	};
}
