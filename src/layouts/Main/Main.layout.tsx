import { Outlet } from 'react-router';

import { Box, Stack, useTheme } from '@mui/material';

import { Navbar } from '@containers';

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
