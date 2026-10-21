import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router';

import {
    Alert,
    CircularProgress,
    Stack,
    Typography,
    useTheme,
} from '@mui/material';

import { UserInfo } from '@components';
import { SearchBox } from '@components';
import { UserListItem } from '@components';
import { useDebounce } from '@hooks';
import { useGetUserDetailsQuery } from '@services';
import { useGetSuggestedUserDetailsQuery } from '@services';

import type { HandleSearch } from './UserSearch.types';

export const UserSearchContainer = () => {
    const [searchUsername, setSearchUsername] = useState('');
    const [inputValue, setInputValue] = useState('');
    const debouncingName = useDebounce(inputValue, 500);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');

    let listdata: UserListItem[] = [];

    const { data: suggestedData } = useGetSuggestedUserDetailsQuery(
        debouncingName,
        {
            skip: debouncingName === '',
        },
    );

    const { data, error, isLoading } = useGetUserDetailsQuery(searchUsername, {
        skip: searchUsername === '',
    });

    if (suggestedData) {
        if (suggestedData.items != null) {
            listdata = suggestedData.items.map((item) => ({
                login: item.login,
                avatar_url: item.avatar_url,
            }));
        }
    }

    const onInputChange = (username: string): void => {
        setInputValue(username);
    };

    const handleSearch: HandleSearch = (username) => {
        setSearchUsername(username);
        setSearchParams({ search: username });
    };

    useEffect(() => {
        if (searchQuery) setSearchUsername(searchQuery);
    }, []);

    const {
        typography: { pxToRem },
    } = useTheme();

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            spacing={pxToRem(20)}
        >
            <Typography variant="h1" sx={{ pb: pxToRem(20) }}>
                Find a github user
            </Typography>
            <SearchBox
                onSearch={handleSearch}
                initialValue={searchQuery}
                listdata={listdata}
                onInputChange={onInputChange}
                searchBoxLabel={'Enter github username'}
            />
            {isLoading && <CircularProgress aria-label="Loading…" />}
            {error && (
                <Alert severity="error">Username doesn&apos;t exits</Alert>
            )}
            {data && !error && <UserInfo user={data} />}
        </Stack>
    );
};
