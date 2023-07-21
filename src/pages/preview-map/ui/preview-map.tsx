import type { FC } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/route/route.tsx';

const PreviewMap: FC = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate(RoutePath.game);
		}, 3000);
	}, []);

	return (
		<div>
			<h1>preview</h1>
		</div>
	);
};

export default PreviewMap;
