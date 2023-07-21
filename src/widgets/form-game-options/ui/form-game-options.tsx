import type { FC } from 'react';
import type { MapOptions } from 'shared/config/api/api-types';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/route/route.tsx';
import { useGameBoardStore } from 'shared/config/model/store/game-board-store.ts';
import axios from 'axios';
import { BACKEND_URL } from 'shared/config/api/urls.ts';

export const FormGameOptions: FC = () => {
	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm<MapOptions>();

	const navigate = useNavigate();
	const setMapOptions = useGameBoardStore((state) => state.setMapOptions);

	async function actionHandler(data: MapOptions) {
		setMapOptions(data);

		const mapResponse = await axios.get(`${BACKEND_URL}/map`, {
			params: data,
		});

		if (mapResponse.data.length) {
			navigate(RoutePath.game);
		} else {
			console.error('map not found');
		}
	}

	return (
		<form
			onSubmit={handleSubmit(actionHandler)}
			className='flex flex-col'
		>
			<input
				type='text'
				defaultValue='Москва'
				{...register('geotag')}
			/>
			<select
				defaultValue={4}
				{...register('size')}
			>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
				<option value='5'>5</option>
				<option value='6'>6</option>
				<option value='7'>7</option>
				<option value='8'>8</option>
			</select>
			<select {...register('scale')}>
				<option value='PROVINCE'>province</option>
				<option value='CITY'>city</option>
				<option value='DISTRICT'>district</option>
				<option value='STREET'>street</option>
			</select>
			<select {...register('api')}>
				<option value='osm'>osm</option>
			</select>
			<button type='submit'>submit</button>
		</form>
	);
};
