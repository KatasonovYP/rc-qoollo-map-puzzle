import type { FC } from 'react';
import { useState } from 'react';
import { Layer, Rect, Stage } from 'react-konva';

function generateShapes() {
	return [...Array(10)].map((_, i) => ({
		id: i.toString(),
		x: Math.random() * window.innerWidth,
		y: Math.random() * window.innerHeight,
		rotation: Math.random() * 180,
		isDragging: false,
	}));
}

const INITIAL_STATE = generateShapes();

const App: FC = () => {
	const [stars, setStars] = useState(INITIAL_STATE);

	const handleDragStart = (event: any): void => {
		const id = event.target.id();
		setStars(
			stars.map((star) => {
				return {
					...star,
					x: Math.round(star.x / 200) * 200,
					y: Math.round(star.y / 200) * 200,
					isDragging: star.id === id,
				};
			}),
		);
	};
	const handleDragEnd = (event: any) => {
		const id = event.target.id();
		setStars(
			stars.map((star, index) => {
				if (+id === index) {
					console.table(star);
				}
				return {
					...star,
					x: Math.round(star.x / 200) * 200,
					y: Math.round(star.y / 200) * 200,
					isDragging: false,
				};
			}),
		);
	};

	return (
		<Stage
			className={'stage'}
			width={1000}
			height={500}
		>
			<Layer>
				{stars.map((star) => {
					console.log(star.x);
					return (
						<Rect
							key={star.id}
							id={star.id}
							x={star.x}
							y={star.y}
							width={100}
							height={100}
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
