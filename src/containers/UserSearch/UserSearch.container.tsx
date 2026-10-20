import { useEffect, useRef, useState } from 'react';

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
import { useGetUserDetailsQuery } from '@services';
import { useGetSuggestedUserDetailsQuery } from '@services';

import type { HandleSearch } from './UserSearch.types';

export const UserSearchContainer = () => {
    const [searchUsername, setSearchUsername] = useState('');
    const [debouncingName, setDebouncingName] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('search');
    const timeRef = useRef<number | undefined>(undefined);

    let listdata: string[] = [];

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
            listdata = suggestedData.items.map((item) => item.login);
        }
    }

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
