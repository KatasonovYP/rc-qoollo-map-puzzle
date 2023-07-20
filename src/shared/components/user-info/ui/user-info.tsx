import type { FC } from 'react';
import { DisabledButton } from 'shared/components/disabled-button';
import { Text } from 'shared/components/text';
import { FlexContainer } from 'shared/components/flex-container';
import { UserLogo } from 'shared/components/user-logo';

export const UserInfo: FC = () => {
	return (
		<FlexContainer element='button'>
			<DisabledButton>
				<Text
					size='sm'
					color='black'
				>
					{`${localStorage.getItem('first_name')}`} <br />{' '}
					{`${localStorage.getItem('last_name')}`}
				</Text>
			</DisabledButton>
			<UserLogo />
		</FlexContainer>
	);
};
