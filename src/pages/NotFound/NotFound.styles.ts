import { Stack, styled } from '@mui/material';

export const NotFoundWrapper = styled(Stack)(() => ({
    justifyContent: 'center',
    gap: '20px',
    alignItems: 'center',
    height: '100vh',
}));

export const NotFoundImage = styled('img')(() => ({
    width: '400px',
}));
