import { Outlet } from 'react-router';

import { Box, CircularProgress, Stack, useTheme } from '@mui/material';

import { Navbar } from '@containers';
import { useAuth } from '@hooks';

/**
 * Standard page layout of the application.
 * It puts the navigation bar at the top and display the main page content below it.
 */
export const MainLayout = () => {
    //Hooks
    const {
        palette: { background },
    } = useTheme();
    const { isLoading } = useAuth();

    if (isLoading)
        return (
            <Stack width="100vw" justifyContent="center" alignItems="center">
                <CircularProgress aria-label="Loading…" />;
            </Stack>
        );
    return (
        <Stack bgcolor={background.default}>
            <Navbar />
            <Box component="main">
                <Outlet />
            </Box>
        </Stack>
    );
};
