import { Avatar, Card, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledProfileCard = styled(Card)(({ theme }) => {
    const {
        typography: { pxToRem },
        breakpoints: { down },
    } = theme;

    return {
        width: pxToRem(800),
        borderRadius: pxToRem(12),
        padding: pxToRem(16),
        [down('md')]: {
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
