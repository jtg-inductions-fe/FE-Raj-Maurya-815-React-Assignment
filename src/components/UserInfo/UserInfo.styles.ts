import { Avatar, Button, Card, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledProfileCard = styled(Card)(({ theme }) => {
    const {
        typography: { pxToRem },
        breakpoints: { down },
    } = theme;

    return {
        width: pxToRem(600),
        borderRadius: pxToRem(12),
        padding: pxToRem(16),

        [down('sm')]: {
            width: '95%',
        },
    };
});

export const StyledProfileAvatar = styled(Avatar)(({ theme }) => {
    const {
        typography: { pxToRem },
        breakpoints: { down },
        shadows,
    } = theme;

    return {
        width: pxToRem(100),
        height: pxToRem(100),
        boxShadow: shadows[4],

        [down('sm')]: {
            width: pxToRem(140),
            height: pxToRem(140),
        },
    };
});

export const StyledInfoLink = styled(Link)(({ theme }) => {
    const {
        typography: { pxToRem },
    } = theme;

    return {
        wordBreak: 'break-all',
        fontSize: pxToRem(16),
    };
});

export const StyledUserHandle = styled(Typography)(({ theme }) => {
    const {
        typography: { pxToRem },
        palette: { divider },
    } = theme;

    return {
        marginBottom: pxToRem(12),
        paddingBottom: pxToRem(8),
        borderBottom: `${pxToRem(1)} solid ${divider}`,
    };
});

export const ButtonWrapper = styled(Button)(({ theme }) => {
    const {
        typography: { pxToRem },
        breakpoints: { down },
        palette,
    } = theme;

    return {
        position: 'absolute',
        right: pxToRem(10),
        textTransform: 'capitalize',
        fontSize: pxToRem(16),
        borderColor: palette.text.primary,
        color: palette.text.primary,
        [down('md')]: {
            fontSize: pxToRem(14),
            padding: pxToRem(4),
        },
    };
});
