import { AppBar, Button, Stack, styled, Toolbar } from '@mui/material';

import { COLORS } from '@constant';

export const NavbarWrapper = styled(AppBar)(({ theme }) => ({
    height: theme.typography.pxToRem(65),
    backgroundColor: COLORS.COMMON.WHITE,
    boxShadow: 'none',
    borderBottom: `${theme.typography.pxToRem(1)} solid`,
    borderColor: COLORS.COMMON.SLATE,
    position: 'sticky',
    color: COLORS.TEXT.PRIMARY,
    paddingLeft: theme.typography.pxToRem(50),
    paddingRight: theme.typography.pxToRem(50),
    [theme.breakpoints.down('md')]: {
        paddingLeft: theme.typography.pxToRem(12),
        paddingRight: theme.typography.pxToRem(12),
    },
}));

export const ToolbarWrapper = styled(Toolbar)(() => ({
    justifyContent: 'space-between',
}));

export const ButtonWrapper = styled(Button)(({ theme }) => ({
    textTransform: 'capitalize',
    fontSize: theme.typography.pxToRem(16),
    borderColor: COLORS.TEXT.PRIMARY,
    color: COLORS.TEXT.PRIMARY,
    [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.pxToRem(14),
        padding: theme.typography.pxToRem(4),
    },
}));

export const ActionWrapper = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    gap: theme.typography.pxToRem(10),
    [theme.breakpoints.down('md')]: {
        gap: theme.typography.pxToRem(4),
    },
}));

export const BrandWrapper = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    gap: theme.typography.pxToRem(10),
}));

export const BrandLogoWrapper = styled('img')(({ theme }) => ({
    height: theme.typography.pxToRem(30),
}));
