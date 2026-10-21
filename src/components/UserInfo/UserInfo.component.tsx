import { CardContent, Stack, Typography, useTheme } from '@mui/material';

import {
    ButtonWrapper,
    InfoLink,
    ProfileAvatar,
    ProfileCard,
    UserHandle,
} from './UserInfo.styles';
import { UserInfoProps } from './UserInfo.types';

export const UserInfo = ({
    user,
    handleFollow,
    isFollowing = true,
    isLogin = false,
}: UserInfoProps) => {
    const handleClick = () => {
        if (handleFollow) handleFollow();
    };
    const {
        typography: { pxToRem },
    } = useTheme();

    return (
        <ProfileCard>
            <CardContent>
                <Stack
                    position="relative"
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={pxToRem(30)}
                >
                    <ProfileAvatar src={user.avatar_url} alt="avatar" />
                    <Stack width="100%">
                        <Typography variant="h2">
                            {user.name || user.login}
                        </Typography>

                        <UserHandle variant="body1">@{user.login}</UserHandle>

                        {user.bio && (
                            <Typography variant="h6" sx={{ mb: pxToRem(16) }}>
                                {user.bio}
                            </Typography>
                        )}

                        <Stack
                            direction="row"
                            spacing={pxToRem(32)}
                            sx={{ mb: pxToRem(20) }}
                        >
                            {user.followers !== undefined &&
                                user.followers !== null && (
                                    <Stack alignItems="center">
                                        Followers{' '}
                                        <Typography variant="h4">
                                            {user.followers}
                                        </Typography>
                                    </Stack>
                                )}
                            {user.following !== undefined &&
                                user.following !== null && (
                                    <Stack alignItems="center">
                                        Following{' '}
                                        <Typography variant="h4">
                                            {user.following}
                                        </Typography>
                                    </Stack>
                                )}
                        </Stack>

                        <Stack spacing={pxToRem(8)}>
                            {user.location && (
                                <Stack
                                    direction="row"
                                    alignItems="baseline"
                                    spacing={pxToRem(8)}
                                    sx={{ flexWrap: 'wrap' }}
                                >
                                    <Typography sx={{ width: pxToRem(80) }}>
                                        Location-
                                    </Typography>
                                    <Typography sx={{ wordBreak: 'break-all' }}>
                                        {user.location}
                                    </Typography>
                                </Stack>
                            )}

                            {user.email && (
                                <Stack
                                    direction="row"
                                    alignItems="baseline"
                                    spacing={pxToRem(8)}
                                    sx={{ flexWrap: 'wrap' }}
                                >
                                    <Typography sx={{ width: pxToRem(80) }}>
                                        Email-
                                    </Typography>
                                    <Typography sx={{ wordBreak: 'break-all' }}>
                                        {user.email}
                                    </Typography>
                                </Stack>
                            )}

                            {user.blog && (
                                <Stack
                                    direction="row"
                                    alignItems="baseline"
                                    spacing={pxToRem(8)}
                                    sx={{ flexWrap: 'wrap' }}
                                >
                                    <Typography sx={{ width: pxToRem(80) }}>
                                        Blog-
                                    </Typography>
                                    <InfoLink href={user.blog} variant="h6">
                                        {user.blog}
                                    </InfoLink>
                                </Stack>
                            )}

                            {user.html_url && (
                                <Stack
                                    direction="row"
                                    alignItems="baseline"
                                    spacing={pxToRem(8)}
                                    sx={{ flexWrap: 'wrap' }}
                                >
                                    <Typography sx={{ width: pxToRem(80) }}>
                                        GitHub-
                                    </Typography>
                                    <InfoLink href={user.html_url} variant="h6">
                                        {user.html_url}
                                    </InfoLink>
                                </Stack>
                            )}
                        </Stack>
                    </Stack>
                    {isLogin && (
                        <ButtonWrapper
                            variant="outlined"
                            onClick={handleClick}
                            disabled={isFollowing}
                        >
                            {isFollowing ? 'following' : 'follow'}
                        </ButtonWrapper>
                    )}
                </Stack>
            </CardContent>
        </ProfileCard>
    );
};
