import { Box, Stack, Typography, useTheme } from '@mui/material';

import { FallbackProps } from './Fallback.types';

/**
 * Fullscreen layout for 404 pages or unexpected app crashes.
 * Centers a fallback image and headline.
 */
export const Fallback = ({ imgSrc, imgAlt, message }: FallbackProps) => {
    //Hooks
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
