import { AppBar, styled } from '@mui/material';

import { COLORS } from '@constant';

export const NavbarWrapper = styled(AppBar)({
    height: '65px',
    backgroundColor: COLORS.COMMON.WHITE,
    boxShadow: 'none',
    borderBottom: '1px solid',
    borderColor: COLORS.COMMON.SLATE,
    position: 'sticky',
});
