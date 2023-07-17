import type { FC } from 'react';
import { Button } from 'shared/components/button';
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
					<Button theme='start'>new game</Button>
				</Link>
				<Link to={RoutePath.main}>
					<Button theme='free'>home</Button>
				</Link>
			</div>
		</div>
	);
};
