import { useEffect, useRef, useState } from 'react';

import { useSearchParams } from 'react-router';

import { Alert, CircularProgress } from '@mui/material';

import { MainHeading, SearchContainer } from './UserSearch.styles';
import type { HandleSearch } from './UserSearch.types';
import { SearchBox } from '../../components/SearchBox';
import { UserInfo } from '../../components/UserInfo';
import { useGetUserDetailsQuery } from '../../services/github.services';
import { useGetSuggestedUserDetailsQuery } from '../../services/github.services';

export const UserSearchContainer = () => {
    const [searchUsername, setSearchUsername] = useState('');
    const [debouncingName, setDebouncingName] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');

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

    const { data, error, isLoading } = useGetUserDetailsQuery(searchUsername, {
        skip: searchUsername === '',
    });

    let listdata: string[] = [];
    if (suggestedData) {
        if (suggestedData.items != null) {
            listdata = suggestedData.items.map((item) => item.login);
        }
    }

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
            {data && !error && <UserInfo user={data} />}
        </SearchContainer>
    );
};
