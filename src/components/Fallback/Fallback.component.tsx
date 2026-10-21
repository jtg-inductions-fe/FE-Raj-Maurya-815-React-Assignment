import { Box, Stack, Typography, useTheme } from '@mui/material';

import { FallbackProps } from './Fallback.types';

export const Fallback = ({ imgSrc, imgAlt, message }: FallbackProps) => {
    const {
        typography: { pxToRem },
    } = useTheme();

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            marginTop={pxToRem(250)}
        >
            <Box
                component="img"
                src={imgSrc}
                alt={imgAlt}
                width={pxToRem(500)}
                marginBottom={pxToRem(20)}
            />
            <Typography variant="h4">{message}</Typography>
        </Stack>
    );
};
