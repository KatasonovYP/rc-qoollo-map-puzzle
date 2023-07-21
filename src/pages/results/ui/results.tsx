import type { FC } from 'react';
import { StartButton } from 'shared/components/start-button';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/route/route.tsx';

interface ResultsProps {
	className?: string;
}

export const Results: FC<ResultsProps> = () => {
	return (
		<div className='h-screen flex flex-col justify-center align-middle gap-4'>
			<h1 className='text-4xl'>Congratulations!</h1>
			<div className='flex gap-4'>
				<Link to={RoutePath.game}>
					<StartButton>new game</StartButton>
				</Link>
				<Link to={RoutePath.main}>
					<StartButton>home</StartButton>
				</Link>
			</div>
		</div>
	);
};
