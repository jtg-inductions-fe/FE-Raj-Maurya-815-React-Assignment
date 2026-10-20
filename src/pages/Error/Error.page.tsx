import { Box, Stack, Typography, useTheme } from '@mui/material';

export const Error = () => {
    const {
        typography: { pxToRem },
    } = useTheme();

    return (
        <Stack justifyContent="center" alignItems="center" height="100vh">
            <Box
                component="img"
                src="/images/Disclaimer-Symbol.webp"
                alt="something went wrong"
                width={pxToRem(400)}
            />
            <Typography variant="h4">OOPS! Something Went Wrong</Typography>
        </Stack>
    );
};
