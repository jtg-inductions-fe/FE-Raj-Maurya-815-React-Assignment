import { AppBar, styled } from '@mui/material';

export const StyledNavbar = styled(AppBar)(({ theme }) => {
    const {
        typography: { pxToRem },
        palette: { background, divider },
    } = theme;

    return {
        height: pxToRem(65),
        backgroundColor: background.paper,
        boxShadow: 'none',
        borderBottom: `${pxToRem(1)} solid`,
        borderColor: divider,
    };
});
