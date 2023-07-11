import type { FC } from 'react';
import { Suspense } from 'react';
import { AppRouter } from './providers';

export const App: FC = () => {
	return (
		<div className='app'>
			<Suspense fallback=''>
				<div className='content-page'>
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
