import { Button, styled } from '@mui/material';

export const StyledSubmitButton = styled(Button)(({ theme }) => {
    const {
        typography: { pxToRem },
    } = theme;

    return {
        textTransform: 'capitalize',
        fontSize: pxToRem(16),
        borderRadius: pxToRem(10),
    };
});
