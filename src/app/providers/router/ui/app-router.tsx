import { type FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config';
import { PageLoader } from 'widgets/page-loader';

export const AppRouter: FC = () => (
	<Routes>
		{Object.values(routeConfig).map(({ path, element }) => (
			<Route
				key={path}
				path={path}
				element={
					<Suspense fallback={<PageLoader />}>
						<div className='page-wrapper'>{element}</div>
					</Suspense>
				}
			/>
		))}
	</Routes>
);
