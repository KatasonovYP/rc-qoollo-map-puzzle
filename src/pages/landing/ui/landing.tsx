import type { FC } from 'react';
import { FlexContainer } from 'shared/components/flex-container/ui/flex-container.tsx';
import { Logo } from 'shared/components/logo';
import { Button } from 'shared/components/button';
import { Text } from 'shared/components/text';
import { HeroImage } from 'shared/components/hero-image';
import MoscowMap from 'shared/assets/images/moscow_map.png';
import BostonMap from 'shared/assets/images/boston_map.png';
import RomeMap from 'shared/assets/images/rome_map.png';
import ParisMap from 'shared/assets/images/paris _map.png';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'shared/config/route/route.tsx';

const Buttons: FC = () => {
	return (
		<FlexContainer element='button'>
			<Button theme='free'>Log in</Button>
			<Button theme='start'>Sign up</Button>
		</FlexContainer>
	);
};

export const Landing: FC = () => {
	const uid = 0;
	return (
		<FlexContainer element='page'>
			<FlexContainer element='header'>
				<Logo></Logo>
				<FlexContainer element='navigation'>
					<Link to={AppRoutes.GAME}>Maps</Link>
					<Link to={AppRoutes.GAME}>Leaderboards</Link>
					<Link to={AppRoutes.GAME}>About us</Link>
				</FlexContainer>
				{uid ? <p>{uid}</p> : <Buttons />}
			</FlexContainer>
			<FlexContainer element='hero'>
				<FlexContainer element='hero-content'>
					<Text size='xl'>
						qoollo
						<br />
						map_..
						<br />
						puzzle
					</Text>
					<Text size='md'>
						Get to know your city —<br />
						get around without maps
					</Text>
					<FlexContainer element='button'>
						<Button theme='start'>Get started</Button>
						<Button theme='free'>It's free</Button>
					</FlexContainer>
				</FlexContainer>
				<div>
					<FlexContainer element='hero-logo'>
						<HeroImage
							src={MoscowMap}
							alt='Moscow map'
						></HeroImage>
						<HeroImage
							src={BostonMap}
							alt='Boston map'
						></HeroImage>
					</FlexContainer>
					<FlexContainer element='hero-logo'>
						<HeroImage
							src={RomeMap}
							alt='Rome map'
						></HeroImage>
						<HeroImage
							src={ParisMap}
							alt='Paris map'
						></HeroImage>
					</FlexContainer>
				</div>
			</FlexContainer>
		</FlexContainer>
	);
};
