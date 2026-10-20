import { CardContent, Typography } from '@mui/material';

import {
    ButtonWrapper,
    InfoField,
    InfoLabel,
    InfoLink,
    InfoList,
    InfoValue,
    ProfileAvatar,
    ProfileCard,
    ProfileDetails,
    ProfileLayout,
    Stats,
    StatsItem,
    UserBio,
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

    return (
        <ProfileCard>
            <CardContent>
                <ProfileLayout>
                    <ProfileAvatar src={user.avatar_url} alt="avatar" />
                    <ProfileDetails>
                        <Typography variant="h2">
                            {user.name || user.login}
                        </Typography>

                        <UserHandle variant="body1">@{user.login}</UserHandle>

                        {user.bio && <UserBio variant="h6">{user.bio}</UserBio>}

                        <Stats>
                            <StatsItem>
                                Followers{' '}
                                <Typography variant="h4">
                                    {user.followers}
                                </Typography>
                            </StatsItem>
                            <StatsItem>
                                Following{' '}
                                <Typography variant="h4">
                                    {user.following}
                                </Typography>
                            </StatsItem>
                        </Stats>

                        <InfoList>
                            {user.location && (
                                <InfoField>
                                    <InfoLabel>Location-</InfoLabel>
                                    <InfoValue>{user.location}</InfoValue>
                                </InfoField>
                            )}

                            {user.email && (
                                <InfoField>
                                    <InfoLabel>Email-</InfoLabel>
                                    <InfoValue>{user.email}</InfoValue>
                                </InfoField>
                            )}

                            {user.blog && (
                                <InfoField>
                                    <InfoLabel>Blog-</InfoLabel>
                                    <InfoLink href={user.blog} variant="h6">
                                        {user.blog}
                                    </InfoLink>
                                </InfoField>
                            )}

                            {user.html_url && (
                                <InfoField>
                                    <InfoLabel>GitHub-</InfoLabel>
                                    <InfoLink href={user.html_url} variant="h6">
                                        {user.html_url}
                                    </InfoLink>
                                </InfoField>
                            )}
                        </InfoList>
                    </ProfileDetails>
                    {isLogin && (
                        <ButtonWrapper
                            variant="outlined"
                            onClick={handleClick}
                            disabled={isFollowing}
                        >
                            {isFollowing ? 'following' : 'follow'}
                        </ButtonWrapper>
                    )}
                </ProfileLayout>
            </CardContent>
        </ProfileCard>
    );
};
