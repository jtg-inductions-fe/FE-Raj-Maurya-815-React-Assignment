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
import {
    useGetSuggestedUserDetailsQuery,
    useLazyGetUserDetailsQuery,
} from '@services';

import type { OnSearch } from './UserSearch.types';

/**
 * Container that manages GitHub user search state, debounced suggestions.
 */
export const UserSearchContainer = () => {
    //Hooks
    const [inputValue, setInputValue] = useState('');
    const debouncingName = useDebounce(inputValue, 500);
    const [searchParams, setSearchParams] = useSearchParams();
    const {
        typography: { pxToRem },
    } = useTheme();

    //Constants
    const searchQuery = searchParams.get('search');

    //Variables
    let listdata: UserListItem[] = [];

    //Queries
    //To get suggested user while typing.
    const { data: suggestedData } = useGetSuggestedUserDetailsQuery(
        debouncingName,
        {
            skip: debouncingName === '',
        },
    );
    //Fetch user details when fetchUserDetails is called.
    const [fetchUserDetails, { data, error, isLoading }] =
        useLazyGetUserDetailsQuery();

    if (suggestedData) {
        if (suggestedData.items != null) {
            listdata = suggestedData.items.map((item: UserListItem) => ({
                login: item.login,
                avatar_url: item.avatar_url,
            }));
        }
    }

    //Event handlers
    //Updates input value to trigger the suggestion debounce.
    const onInputChange = (username: string): void => {
        setInputValue(username);
    };
    // Updates search username and  the URL search query parameters.
    const onSearch: OnSearch = (username) => {
        void fetchUserDetails(username);
        setSearchParams({ search: username });
    };

    //Useeffects
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
            {data && !error && <UserInfo user={data} />}
        </Stack>
    );
};
