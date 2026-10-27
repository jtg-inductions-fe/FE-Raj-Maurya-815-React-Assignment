import { CardContent, Stack, Typography, useTheme } from '@mui/material';

import {
    StyledInfoLink,
    StyledProfileAvatar,
    StyledProfileCard,
    StyledUserHandle,
} from './UserInfo.styles';
import { UserInfoProps } from './UserInfo.types';
import { CustomButton } from '../Button';

/**
 * UI card component that displays GitHub profile information for a user and has follow button.
 */
export const UserInfo = ({
    user,
    handleFollow,
    isFollowing = true,
    isLogin = false,
}: UserInfoProps) => {
    //Hooks
    const {
        typography: { pxToRem },
        palette: {
            text: { primary },
        },
    } = useTheme();

    //Event handlers
    // call follow user api.
    const handleClick = () => {
        if (handleFollow) handleFollow();
    };

    return (
        <StyledProfileCard>
            <CardContent>
                <Stack
                    position="relative"
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={pxToRem(30)}
                >
                    <StyledProfileAvatar src={user.avatar_url} alt="avatar" />
                    <Stack width="100%">
                        <Stack
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Typography
                                variant="h2"
                                sx={{ wordBreak: 'break-all' }}
                            >
                                {user.name || user.login}
                            </Typography>
                            {isLogin && (
                                <CustomButton
                                    fontSize={16}
                                    height={40}
                                    textColor={primary}
                                    borderColor={primary}
                                    variant="outlined"
                                    onClick={handleClick}
                                    disabled={isFollowing}
                                >
                                    {isFollowing ? 'following' : 'follow'}
                                </CustomButton>
                            )}
                        </Stack>

                        <StyledUserHandle variant="body1">
                            @{user.login}
                        </StyledUserHandle>

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
                                    <StyledInfoLink
                                        target="_blank"
                                        href={user.blog}
                                        variant="h6"
                                    >
                                        {user.blog}
                                    </StyledInfoLink>
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
                                    <StyledInfoLink
                                        target="_blank"
                                        href={user.html_url}
                                        variant="h6"
                                    >
                                        {user.html_url}
                                    </StyledInfoLink>
                                </Stack>
                            )}
                        </Stack>
                    </Stack>
                </Stack>
            </CardContent>
        </StyledProfileCard>
    );
};
