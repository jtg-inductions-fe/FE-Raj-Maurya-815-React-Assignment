import { AppBar, styled } from '@mui/material';

export const NavHeader = styled(AppBar)(
    ({
        theme: {
            typography: { pxToRem },
            palette: { background, divider },
        },
    }) => ({
        height: pxToRem(65),
        backgroundColor: background.paper,
        boxShadow: 'none',
        borderBottom: `${pxToRem(1)} solid`,
        borderColor: divider,
    }),
);
