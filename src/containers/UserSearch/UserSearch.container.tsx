import { useEffect, useRef, useState } from 'react';

import { useSearchParams } from 'react-router';

import { Alert, CircularProgress } from '@mui/material';

import { MainHeading, SearchContainer } from './UserSearch.styles';
import type { HandleSearch } from './UserSearch.types';
import { SearchBox } from '../../components/SearchBox';
import { UserInfo } from '../../components/UserInfo';
import { LocalUserData } from '../../layouts/Main/Main.types';
import {
    useAuthenticateUserDetailsQuery,
    useCheckUserFollowingQuery,
    useFollowUserMutation,
    useGetUserDetailsQuery,
} from '../../services/github.service';
import { useGetSuggestedUserDetailsQuery } from '../../services/github.service';

export const UserSearchContainer = () => {
    const [searchUsername, setSearchUsername] = useState('');
    const [debouncingName, setDebouncingName] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');
    const [followUser] = useFollowUserMutation();

    const { data: suggestedData } = useGetSuggestedUserDetailsQuery(
        debouncingName,
        {
            skip: debouncingName === '',
        },
    );

    const timeRef = useRef<number | undefined>(undefined);

    const onInputChange = (username: string): void => {
        if (timeRef.current) {
            clearTimeout(timeRef.current);
        }

        if (username == '') {
            setDebouncingName('');
            return;
        }
        timeRef.current = setTimeout(() => {
            setDebouncingName(username);
        }, 500);
    };

    const handleSearch: HandleSearch = (username) => {
        setSearchUsername(username);
        setSearchParams({ search: username });
    };

    const {
        data: searhedUserData,
        error,
        isLoading,
    } = useGetUserDetailsQuery(searchUsername, {
        skip: searchUsername === '',
    });

    let listdata: string[] = [];
    if (suggestedData) {
        if (suggestedData.items != null) {
            listdata = suggestedData.items.map((item) => item.login);
        }
    }

    const userData = localStorage.getItem('userData');
    const token = userData
        ? (JSON.parse(userData) as LocalUserData).personal_access_token
        : '';

    const { data: loginUserData } = useAuthenticateUserDetailsQuery(token, {
        skip: token === '',
    });

    const isLogin = !!loginUserData?.login;

    const { data: followingData, isLoading: isFollowingLoading } =
        useCheckUserFollowingQuery(
            { target_username: searhedUserData?.login || '', token },
            {
                skip: !isLogin || !searhedUserData?.login,
            },
        );

    const isFollowing = isFollowingLoading ? true : followingData === true;

    const handleFollow = () => {
        if (!token || !searhedUserData?.login || !loginUserData?.login) return;
        void followUser({
            username: loginUserData.login,
            target_username: searhedUserData.login,
            token,
        });
    };

    useEffect(() => {
        if (searchQuery) setSearchUsername(searchQuery);
    }, []);

    return (
        <SearchContainer>
            <MainHeading variant="h1">Find a github user</MainHeading>
            <SearchBox
                onSearch={handleSearch}
                initialValue={searchQuery}
                listdata={listdata}
                onInputChange={onInputChange}
            />
            {isLoading && <CircularProgress aria-label="Loading…" />}
            {error && (
                <Alert severity="error">Username doesn&apos;t exits</Alert>
            )}
            {searhedUserData && !error && (
                <UserInfo
                    user={searhedUserData}
                    isLogin={isLogin}
                    handleFollow={handleFollow}
                    isFollowing={isFollowing}
                />
            )}
        </SearchContainer>
    );
};
