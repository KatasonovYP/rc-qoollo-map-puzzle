import type { FC } from 'react';
import { FlexContainer } from 'shared/components/flex-container/ui/flex-container.tsx';
import { Logo } from 'shared/components/logo';
import { StartButton } from 'shared/components/start-button';
import { DisabledButton } from 'shared/components/disabled-button';
import { Text } from 'shared/components/text';
import { HeroImage } from 'shared/components/hero-image';
import { AuthContainer } from 'shared/components/auth-container';
import MoscowMap from 'shared/assets/images/moscow_map.png';
import BostonMap from 'shared/assets/images/boston_map.png';
import RomeMap from 'shared/assets/images/rome_map.png';
import ParisMap from 'shared/assets/images/paris _map.png';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../../shared/config/route/route.tsx';

export const Landing: FC = () => {
	return (
		<FlexContainer element='page'>
			<FlexContainer element='header'>
				<Logo />
				<FlexContainer element='navigation'>
					<Link to={RoutePath['game-options']}>Maps</Link>
					<Link to={RoutePath['game-options']}>Leaderboards</Link>
					<Link to={RoutePath['game-options']}>About us</Link>
				</FlexContainer>
				<AuthContainer />
			</FlexContainer>
			<FlexContainer element='hero'>
				<FlexContainer element='hero-content'>
					<Text
						size='xl'
						color='black'
					>
						qoollo <br /> map_.. <br /> puzzle
					</Text>
					<Text
						size='md'
						color='black'
					>
						Get to know your city — <br /> get around without maps
					</Text>
					<FlexContainer element='button'>
						<StartButton>
							<Text
								size='sm'
								color='white'
							>
								Get started
							</Text>
						</StartButton>
						<DisabledButton>
							<Text
								size='sm'
								color='black'
							>
								It's free
							</Text>
						</DisabledButton>
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
