import { AppBar, styled } from '@mui/material';

import { COLORS } from '@constant';

export const NavbarWrapper = styled(AppBar)(({ theme }) => ({
    height: theme.typography.pxToRem(65),
    backgroundColor: COLORS.COMMON.WHITE,
    boxShadow: 'none',
    borderBottom: `${theme.typography.pxToRem(1)} solid`,
    borderColor: COLORS.COMMON.SLATE,
    position: 'sticky',
    // color: 'black'
}));
