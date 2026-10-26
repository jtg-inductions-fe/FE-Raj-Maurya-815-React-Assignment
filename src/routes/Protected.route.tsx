import { Navigate, Outlet } from 'react-router';

import { CircularProgress, Stack } from '@mui/material';

import { ROUTES } from '@constant';
import { useAuth } from '@hooks';

/**
 * A security wrapper that checks if a user is logged in.
 * It displays a loader while checking, allow if authenticated, and redirect
 * user back to the login page if not authenticated.
 */
export const Protected = () => {
    //Hooks
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return (
            <Stack justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress aria-label="Loading…" />;
            </Stack>
        );
    }

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to={`/${ROUTES.LOGIN}`} replace={true} />
    );
};
