import { Stack, styled } from '@mui/material';

export const StyledLogin = styled(Stack)(({ theme }) => {
    const {
        typography: { pxToRem },
        shadows,
    } = theme;

    return {
        borderRadius: pxToRem(30),
        boxShadow: shadows[6],
    };
});
