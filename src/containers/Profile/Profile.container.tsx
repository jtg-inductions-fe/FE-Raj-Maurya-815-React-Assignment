import { CircularProgress, Stack, Typography, useTheme } from '@mui/material';

import { UserInfo } from '@components';
import { useAuth } from '@hooks';

/**
 * A profile container that reads the logged-in user data with help of authentication hook,
 * and then show their UserInfo card.
 */
export const ProfileContainer = () => {
    //Hooks
    const {
        typography: { pxToRem },
    } = useTheme();
    const { isLoading, user } = useAuth();

    if (isLoading || user === null)
        return <CircularProgress aria-label="Loading…" />;
    return (
        <Stack
            marginTop={pxToRem(100)}
            justifyContent="center"
            alignItems="center"
            gap={pxToRem(20)}
        >
            <Typography variant="h1">My profile</Typography>
            <UserInfo user={user} />
        </Stack>
    );
};
