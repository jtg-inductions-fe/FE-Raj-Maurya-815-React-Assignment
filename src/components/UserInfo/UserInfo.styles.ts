import { Avatar, Button, Card, Link, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { COLORS } from '@constant';

export const ProfileCard = styled(Card)(({ theme }) => ({
    width: theme.typography.pxToRem(600),
    borderRadius: theme.typography.pxToRem(12),
    padding: theme.typography.pxToRem(16),

    [theme.breakpoints.down('sm')]: {
        width: '95%',
    },
}));

export const ProfileLayout = styled(Stack)(({ theme }) => ({
    position: 'relative',
    flexDirection: 'row',
    gap: theme.typography.pxToRem(30),

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
}));

export const ProfileAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.typography.pxToRem(100),
    height: theme.typography.pxToRem(100),
    boxShadow: theme.shadows[4],

    [theme.breakpoints.down('sm')]: {
        width: theme.typography.pxToRem(140),
        height: theme.typography.pxToRem(140),
    },
}));

export const UserHandle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.typography.pxToRem(12),
    paddingBottom: theme.typography.pxToRem(8),
    borderBottom: `${theme.typography.pxToRem(1)} solid #e5dfdf`,
}));

export const UserBio = styled(Typography)(({ theme }) => ({
    marginBottom: theme.typography.pxToRem(16),
}));

export const Stats = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    gap: theme.typography.pxToRem(32),
    marginBottom: theme.typography.pxToRem(20),
}));

export const StatsItem = styled(Stack)(() => ({
    alignItems: 'center',
}));

export const InfoList = styled(Stack)(({ theme }) => ({
    gap: theme.typography.pxToRem(8),
}));

export const InfoField = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    gap: theme.typography.pxToRem(8),
}));

export const InfoLabel = styled(Typography)(({ theme }) => ({
    width: theme.typography.pxToRem(80),
}));

export const InfoValue = styled(Typography)(() => ({
    wordBreak: 'break-all',
}));

export const InfoLink = styled(Link)(({ theme }) => ({
    wordBreak: 'break-all',
    fontSize: theme.typography.pxToRem(16),
}));

export const ProfileDetails = styled(Stack)({
    width: '100%',
});

export const ButtonWrapper = styled(Button)(({ theme }) => ({
    position: 'absolute',
    right: theme.typography.pxToRem(10),
    textTransform: 'capitalize',
    fontSize: theme.typography.pxToRem(16),
    borderColor: COLORS.TEXT.PRIMARY,
    color: COLORS.TEXT.PRIMARY,
    [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.pxToRem(14),
        padding: theme.typography.pxToRem(4),
    },
}));
