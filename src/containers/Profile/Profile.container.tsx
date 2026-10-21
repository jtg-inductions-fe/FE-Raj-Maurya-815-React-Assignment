import { CircularProgress, Typography } from '@mui/material';

import { UserInfo } from '@components';
import { useAuth } from '@hooks';

import { ProfileContainerWrapper } from './Profile.styles';

export const ProfileContainer = () => {
    const { isLoading, user } = useAuth();

    if (isLoading || user === null)
        return <CircularProgress aria-label="Loading…" />;
    return (
        <ProfileContainerWrapper>
            <Typography variant="h1">My profile</Typography>
            <UserInfo user={user} />
        </ProfileContainerWrapper>
    );
};
