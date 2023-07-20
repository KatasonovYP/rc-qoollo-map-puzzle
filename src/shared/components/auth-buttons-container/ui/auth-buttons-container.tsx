import type { FC } from 'react';
import { VKButton } from 'shared/components/vk-button';
import { DisabledButton } from 'shared/components/disabled-button';
import { Text } from 'shared/components/text';
import { VKLogo } from 'shared/components/vk-logo';
import { FlexContainer } from 'shared/components/flex-container';

export const AuthButtonsContainer: FC = () => {
	return (
		<FlexContainer element='button'>
			<DisabledButton>
				<Text
					size='sm'
					color='black'
				>
					{' '}
				</Text>
			</DisabledButton>
			<VKButton>
				<Text
					size='sm'
					color='white'
				>
					Auth with
				</Text>
				<VKLogo />
			</VKButton>
		</FlexContainer>
	);
};

