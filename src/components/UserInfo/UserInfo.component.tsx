import { CardContent, Typography } from '@mui/material';

import {
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

export const UserInfo = ({ user }: UserInfoProps) => (
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

                        {user.url && (
                            <InfoField>
                                <InfoLabel>GitHub-</InfoLabel>
                                <InfoLink href={user.url} variant="h6">
                                    {user.url}
                                </InfoLink>
                            </InfoField>
                        )}
                    </InfoList>
                </ProfileDetails>
            </ProfileLayout>
        </CardContent>
    </ProfileCard>
);
