import { Stack, styled } from '@mui/material';

export const ErrorWrapper = styled(Stack)(() => ({
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
}));

export const ErrorImage = styled('img')(({ theme }) => ({
    width: theme.typography.pxToRem(400),
}));
