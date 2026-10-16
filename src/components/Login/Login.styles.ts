import { Button, Stack, styled } from '@mui/material';

export const LoginWrapper = styled(Stack)(({ theme }) => ({
    width: theme.typography.pxToRem(500),
    height: theme.typography.pxToRem(500),
    borderRadius: theme.typography.pxToRem(30),
    padding: theme.typography.pxToRem(60),
    boxShadow: theme.shadows[6],
    textAlign: 'center',
    gap: theme.typography.pxToRem(20),
}));

export const ButtonWrapper = styled(Button)(({ theme }) => ({
    width: theme.typography.pxToRem(380),
    height: theme.typography.pxToRem(40),
    textTransform: 'capitalize',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: theme.typography.pxToRem(18),
}));
