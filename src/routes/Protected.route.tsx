import { Navigate, Outlet } from 'react-router';

import { CircularProgress, Stack } from '@mui/material';

import { ROUTES } from '@constant';
import { useAuth } from '@hooks';

export const Protected = () => {
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
