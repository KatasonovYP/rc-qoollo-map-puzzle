import type { FC } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/route/route.tsx';
import { PreviewMapImage } from 'shared/components/preview-map-image';

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
			<PreviewMapImage />
		</div>
	);
};

export default PreviewMap;
