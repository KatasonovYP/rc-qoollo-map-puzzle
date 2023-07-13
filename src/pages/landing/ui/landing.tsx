import type { FC } from 'react';
import { FlexContainer } from 'shared/components/flex-container/ui/flex-container.tsx';
import { Logo } from 'shared/components/logo';
import { Link } from 'shared/components/link';
import { Button } from 'shared/components/button';
import { Text } from 'shared/components/text';
import { HeroImage } from 'shared/components/hero-image';
import MoscowMap from 'shared/assets/images/moscow_map.png';
import BostonMap from 'shared/assets/images/boston_map.png';
import RomeMap from 'shared/assets/images/rome_map.png';
import ParisMap from 'shared/assets/images/paris _map.png';

export const Landing: FC = () => {
	return (
		<FlexContainer element='page'>
			<FlexContainer element='header'>
				<Logo></Logo>
				<FlexContainer element='navigation'>
					<Link>Maps</Link>
					<Link>Leaderboards</Link>
					<Link>About us</Link>
				</FlexContainer>
				<FlexContainer element='button'>
					<Button rounded='free'>
						<Text
							size='sm'
							color='black'
						>
							Log in
						</Text>
					</Button>
					<Button rounded='start'>
						<Text
							size='sm'
							color='white'
						>
							Sign up
						</Text>
					</Button>
				</FlexContainer>
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
						<Button rounded='start'>
							<Text
								size='sm'
								color='white'
							>
								Get started
							</Text>
						</Button>
						<Button rounded='free'>
							<Text
								size='sm'
								color='black'
							>
								It's free
							</Text>
						</Button>
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

