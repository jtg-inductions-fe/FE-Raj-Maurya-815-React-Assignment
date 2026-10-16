import { Stack, styled } from '@mui/material';

export const NotFoundWrapper = styled(Stack)(({ theme }) => ({
    justifyContent: 'center',
    gap: theme.typography.pxToRem(20),
    alignItems: 'center',
    height: '100vh',
}));

export const NotFoundImage = styled('img')(({ theme }) => ({
    width: theme.typography.pxToRem(400),
}));
