import { Box, styled } from '@mui/material';

export const NotFoundWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '20px',
    alignItems: 'center',
    height: '100vh',
}));

export const NotFoundImage = styled('img')(() => ({
    width: '400px',
}));
