import { Box, Stack, Typography, useTheme } from '@mui/material';

export const NotFound = () => {
    const {
        typography: { pxToRem },
    } = useTheme();

    return (
        <Stack
            height="100vh"
            justifyContent="center"
            alignItems="center"
            spacing={pxToRem(20)}
        >
            <Box
                component="img"
                src="/images/not-found.webp"
                alt="404 not found"
                width={pxToRem(400)}
            />
            <Typography variant="h4">OOPS! Page not found</Typography>
        </Stack>
    );
};
