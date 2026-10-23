import { AppBar, Button, styled } from '@mui/material';

export const StyledNavbar = styled(AppBar)(({ theme }) => {
    const {
        typography: { pxToRem },
        palette: { background, divider },
        breakpoints: { down },
    } = theme;

    return {
        height: pxToRem(65),
        backgroundColor: background.paper,
        boxShadow: 'none',
        paddingLeft: pxToRem(50),
        paddingRight: pxToRem(50),
        borderBottom: `${pxToRem(1)} solid`,
        borderColor: divider,
        [down('md')]: {
            paddingLeft: pxToRem(12),
            paddingRight: pxToRem(12),
        },
    };
});

export const StyledButton = styled(Button)(({ theme }) => {
    const {
        typography: { pxToRem },
        breakpoints: { down },
        palette: { text },
    } = theme;

    return {
        textTransform: 'capitalize',
        fontSize: pxToRem(16),
        borderColor: text.primary,
        color: text.primary,
        [down('md')]: {
            fontSize: pxToRem(14),
            padding: pxToRem(4),
        },
    };
});

export const StyledBrandLogo = styled('img')(({ theme }) => {
    const {
        typography: { pxToRem },
    } = theme;

    return {
        height: pxToRem(30),
    };
});
