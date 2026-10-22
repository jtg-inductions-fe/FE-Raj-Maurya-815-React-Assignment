import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router';

import {
    Alert,
    CircularProgress,
    Stack,
    Typography,
    useTheme,
} from '@mui/material';

import type { UserListItem } from '@components';
import { SearchBox, UserInfo } from '@components';
import { useDebounce } from '@hooks';
import { LocalUserData } from '@layouts';
import {
    useAuthenticateUserDetailsQuery,
    useCheckUserFollowingQuery,
    useFollowUserMutation,
    useGetSuggestedUserDetailsQuery,
    useLazyGetUserDetailsQuery,
} from '@services';

import type { OnSearch } from './UserSearch.types';

/**
 * Container that manages GitHub user search state, debounced suggestions.
 */
export const UserSearchContainer = () => {
    const [inputValue, setInputValue] = useState('');
    const debouncingName = useDebounce(inputValue, 500);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');
    const [followUser] = useFollowUserMutation();

    const {
        typography: { pxToRem },
    } = useTheme();

    let listdata: UserListItem[] = [];

    const { data: suggestedData } = useGetSuggestedUserDetailsQuery(
        debouncingName,
        {
            skip: debouncingName === '',
        },
    );

    const [fetchUserDetails, { data: searhedUserData, error, isLoading }] =
        useLazyGetUserDetailsQuery();

    if (suggestedData) {
        if (suggestedData.items != null) {
            listdata = suggestedData.items.map((item: UserListItem) => ({
                login: item.login,
                avatar_url: item.avatar_url,
            }));
        }
    }

    /**
     * Updates input value to trigger the suggestion debounce.
     */
    const onInputChange = (username: string): void => {
        setInputValue(username);
    };

    /**
     * Updates search username and  the URL search query parameters.
     */
    const onSearch: OnSearch = (username) => {
        void fetchUserDetails(username);
        setSearchParams({ search: username });
    };
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
        if (searchQuery) {
            void fetchUserDetails(searchQuery);
        }
    }, []);

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            spacing={pxToRem(20)}
            marginTop={pxToRem(100)}
        >
            <Typography variant="h1" sx={{ pb: pxToRem(20) }}>
                Find a github user
            </Typography>
            <SearchBox
                onSearch={onSearch}
                initialValue={searchQuery}
                listdata={listdata}
                onInputChange={onInputChange}
                searchBoxLabel={'Enter github username'}
            />
            {isLoading && <CircularProgress aria-label="Loading…" />}
            {error && (
                <Alert severity="error">Username doesn&apos;t exists</Alert>
            )}
            {searhedUserData && !error && (
                <UserInfo
                    user={searhedUserData}
                    isLogin={isLogin}
                    handleFollow={handleFollow}
                    isFollowing={isFollowing}
                />
            )}
        </Stack>
    );
};
