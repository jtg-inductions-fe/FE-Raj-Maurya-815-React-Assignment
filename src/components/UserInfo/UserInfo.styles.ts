import { Avatar, Card, Link, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ProfileCard = styled(Card)(({ theme }) => ({
    width: '600px',
    borderRadius: '12px',
    padding: '16px',

    [theme.breakpoints.down('sm')]: {
        width: '95%',
    },
}));

export const ProfileLayout = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    gap: '30px',

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
}));

export const ProfileAvatar = styled(Avatar)(({ theme }) => ({
    width: '100px',
    height: '100px',
    boxShadow: theme.shadows[4],

    [theme.breakpoints.down('sm')]: {
        width: '140px',
        height: '140px',
        // marginLeft: 'auto',
        // marginRight: 'auto',
    },
}));

export const UserHandle = styled(Typography)({
    marginBottom: '12px',
});

export const UserBio = styled(Typography)({
    marginBottom: '16px',
});

export const Stats = styled(Stack)({
    flexDirection: 'row',
    gap: '32px',
    marginBottom: '20px',
});

export const StatsItem = styled(Stack)({
    alignItems: 'center',
});

export const InfoList = styled(Stack)({
    gap: '8px',
});

export const InfoField = styled(Stack)({
    flexDirection: 'row',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    gap: '8px',
});

export const InfoLabel = styled(Typography)({
    width: '80px',
});

export const InfoValue = styled(Typography)({
    wordBreak: 'break-all',
});

export const InfoLink = styled(Link)({
    wordBreak: 'break-all',
    fontSize: '16px',
});

export const ProfileDetails = styled(Stack)({
    // backgroundColor: 'red',
    width: '100%',
});
