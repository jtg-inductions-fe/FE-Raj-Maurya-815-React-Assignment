import { Button, Stack, styled } from '@mui/material';

export const LoginWrapper = styled(Stack)(({ theme }) => {
    const {
        typography: { pxToRem },
        shadows,
    } = theme;

    return {
        borderRadius: pxToRem(30),
        boxShadow: shadows[6],
    };
});

export const ButtonWrapper = styled(Button)(({ theme }) => {
    const {
        typography: { pxToRem },
    } = theme;

    return {
        width: pxToRem(380),
        height: pxToRem(40),
        textTransform: 'capitalize',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: pxToRem(18),
    };
});
