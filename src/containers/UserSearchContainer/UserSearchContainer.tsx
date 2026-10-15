import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router';

import { Alert, CircularProgress } from '@mui/material';

import { MainHeading, SearchContainer } from './UserSearchContainer.styles';
import type { HandleSearch } from './UserSearchContainer.types';
import { SearchBox } from '../../components/SearchBox';
import { UserInfo } from '../../components/UserInfo';
import { useGetUserDetailsQuery } from '../../services/githubApi';

export const UserSearchContainer = () => {
    const [searchUsername, setSearchUsername] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('search');

    useEffect(() => {
        if (searchQuery) setSearchUsername(searchQuery);
    }, []);

    const handleSearch: HandleSearch = (username) => {
        setSearchUsername(username);
        setSearchParams({ search: username });
    };

    const { data, error, isLoading } = useGetUserDetailsQuery(searchUsername, {
        skip: searchUsername === '',
    });

    return (
        <SearchContainer>
            <MainHeading variant="h1">Find a github user</MainHeading>
            <SearchBox onSearch={handleSearch} initialValue={searchQuery} />
            {isLoading && <CircularProgress aria-label="Loading…" />}
            {error && (
                <Alert severity="error">Username doesn&apos;t exits</Alert>
            )}
            {data && !error && <UserInfo user={data} />}
        </SearchContainer>
    );
};
