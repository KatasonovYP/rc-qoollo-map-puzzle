import type { FC } from 'react';
import { GameBoard } from '../shared/components/game-board/ui/game-board';
import { Text } from '../shared/components/text/ui/text';
import { Button } from '../shared/components/button';
import { FlexContainer } from '../shared/components/flex-container/ui/flex-container';
import { Logo } from '../shared/components/image';
import { Link } from '../shared/components/link';
import { HeroImage } from '../shared/components/hero-image';
import MoscowMap from '../shared/assets/images/moscow_map.png';
import BostonMap from '../shared/assets/images/boston_map.png';
import RomeMap from '../shared/assets/images/rome_map.png';
import ParisMap from '../shared/assets/images/paris _map.png';

const App: FC = () => {
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
					<Button rounded='free'>Log in</Button>
					<Button rounded='start'>Sign up</Button>
				</FlexContainer>
			</FlexContainer>
			<FlexContainer element='hero'>
				<FlexContainer element='hero-content'>
					<Text size='xl'>
						qoollo <br /> map_.. <br /> puzzle
					</Text>
					<Text size='md'>
						Get to know your city — <br /> get around without maps
					</Text>
					<FlexContainer element='button'>
						<Button rounded='start'>Get started</Button>
						<Button rounded='free'>It's free</Button>
					</FlexContainer>
				</FlexContainer>
				<div>
					<FlexContainer element='hero-image'>
						<HeroImage
							src={MoscowMap}
							alt='Moscow map'
						></HeroImage>
						<HeroImage
							src={BostonMap}
							alt='Boston map'
						></HeroImage>
					</FlexContainer>
					<FlexContainer element='hero-image'>
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

export default App;

