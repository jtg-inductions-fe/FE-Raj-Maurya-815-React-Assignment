import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    primary: {
        main: COLORS.PRIMARY.MAIN,
    },
    secondary: {
        main: COLORS.SECONDARY.MAIN,
    },
    text: {
        primary: COLORS.TEXT.PRIMARY,
        secondary: COLORS.TEXT.SECONDARY,
    },
    common: {
        black: COLORS.COMMON.BLACK,
        white: COLORS.COMMON.WHITE,
    },
    background: {
        default: COLORS.COMMON.DEEP_CHARCOAL,
        paper: COLORS.COMMON.DARK_NAVY,
    },
    divider: COLORS.COMMON.SLATE,
};
