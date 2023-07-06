import type { FC } from 'react';
import { useState } from 'react';
import { Layer, Rect, Stage } from 'react-konva';
import { KonvaEventObject } from 'konva/lib/Node';

const PUZZLE_SIZE = 100;
const COUNT_X = 10;
const COUNT_Y = 5;

function snap(position: number) {
	const cell = PUZZLE_SIZE;
	return Math.round(position / cell) * cell;
}

function generateShapes() {
	return [...Array(10)].map((_, i) => ({
		id: i.toString(),
		x: snap(Math.random() * PUZZLE_SIZE * (COUNT_X - 1)),
		y: snap(Math.random() * PUZZLE_SIZE * (COUNT_Y - 1)),
		isDragging: false,
	}));
}

const INITIAL_STATE = generateShapes();

const App: FC = () => {
	const [stars, setStars] = useState(INITIAL_STATE);

	const handleDragStart = (event: KonvaEventObject<DragEvent>): void => {
		const id = event.target.id();
		setStars(
			stars.map((star) => {
				return {
					...star,
					isDragging: star.id === id,
				};
			}),
		);
	};
	const handleDragEnd = (event: KonvaEventObject<DragEvent>) => {
		const id = event.target.id();
		setStars(
			stars.map((star, index) => {
				if (+id === index) {
					const x = event.target.x();
					const y = event.target.y();
					if (snap(x) !== star.x) {
						return {
							...star,
							x: snap(x),
							y: snap(y),
							isDragging: false,
						};
					}
				}
				return {
					...star,
					isDragging: false,
				};
			}),
		);
	};

	return (
		<Stage
			className={'stage'}
			width={PUZZLE_SIZE * COUNT_X}
			height={PUZZLE_SIZE * COUNT_Y}
		>
			<Layer>
				{stars.map((star) => {
					return (
						<Rect
							key={star.id}
							id={star.id}
							x={snap(star.x)}
							y={star.y}
							width={PUZZLE_SIZE}
							height={PUZZLE_SIZE}
							fill='#88f'
							opacity={0.8}
							draggable
							shadowColor='black'
							shadowBlur={10}
							shadowOpacity={0.6}
							shadowOffsetX={star.isDragging ? 10 : 5}
							shadowOffsetY={star.isDragging ? 10 : 5}
							scaleX={star.isDragging ? 1.2 : 1}
							scaleY={star.isDragging ? 1.2 : 1}
							onDragStart={handleDragStart}
							onDragEnd={handleDragEnd}
						/>
					);
				})}
			</Layer>
		</Stage>
	);
};

export default App;
