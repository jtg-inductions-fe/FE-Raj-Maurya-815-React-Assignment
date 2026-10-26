import { Outlet } from 'react-router';

import { Box, Stack, useTheme } from '@mui/material';

import { Navbar } from '@containers';

/**
 * Standard page layout of the application.
 * It puts the navigation bar at the top and display the main page content below it.
 */
export const MainLayout = () => {
    const {
        typography: { pxToRem },
    } = useTheme();

    return (
        <Stack height="100vh" spacing={pxToRem(100)}>
            <Navbar />
            <Box component="main">
                <Outlet />
            </Box>
        </Stack>
    );
};
