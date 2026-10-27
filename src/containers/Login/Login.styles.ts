import { Stack, styled } from '@mui/material';

import { COLORS } from '@constant';

export const StyledLogin = styled(Stack)(({ theme }) => {
    const {
        typography: { pxToRem },
    } = theme;

    return {
        borderRadius: pxToRem(30),
        boxShadow: COLORS.SHADOW.WARM_GLOW_MEDIUM,
    };
});
