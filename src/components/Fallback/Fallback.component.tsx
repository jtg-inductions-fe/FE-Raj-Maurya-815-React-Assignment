import { Box, Stack, Typography, useTheme } from '@mui/material';

import { FallbackProps } from './Fallback.types';

export const Fallback = ({ imgSrc, imgAlt, message }: FallbackProps) => {
    const {
        typography: { pxToRem },
    } = useTheme();

    return (
        <Stack justifyContent="center" alignItems="center" height="100vh">
            <Box
                component="img"
                src={imgSrc}
                alt={imgAlt}
                width={pxToRem(400)}
            />
            <Typography variant="h4">{message}</Typography>
        </Stack>
    );
};
