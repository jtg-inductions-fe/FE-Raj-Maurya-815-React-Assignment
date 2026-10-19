import { useEffect, useState } from 'react';

import { CircularProgress, Typography } from '@mui/material';

import { ProfileContainerWrapper } from './Profile.styles';
import { GithubUser, UserInfo } from '../../components/UserInfo';

export const ProfileContainer = () => {
    const [data, setData] = useState<GithubUser | null>(null);
    const localStorageData = localStorage.getItem('userData');

    useEffect(() => {
        if (localStorageData != null && localStorageData != undefined)
            setData(JSON.parse(localStorageData) as GithubUser);
    }, [localStorageData]);

    if (data == null) return <CircularProgress aria-label="Loading…" />;
    return (
        <ProfileContainerWrapper>
            <Typography variant="h1">My profile</Typography>
            <UserInfo user={data} />
        </ProfileContainerWrapper>
    );
};
