export const SAFE_POSITION = -1000;

export const TILE_FEED_X_POSITION = -2;

export interface Position {
	x: number;
	y: number;
}

export interface GameBoardOptions {
	tileSide: number;
	buildBoardSide: number;
	tileFeedSize: number;
	gameBoardSides: Position;
}
