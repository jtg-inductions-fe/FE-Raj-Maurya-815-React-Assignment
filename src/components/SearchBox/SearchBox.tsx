import { useEffect, useState } from 'react';

import { Autocomplete, TextField } from '@mui/material';

import { SearchBoxWrapper, SubmitButton } from './SearchBox.styles';
import { SearchBoxProps } from './SearchBox.types';
import { useGetSuggestedUserDetailsQuery } from '../../services/githubApi';

export const SearchBox = ({ onSearch, initialValue }: SearchBoxProps) => {
    const [username, setUsername] = useState('');
    const [debouncingName, setDebouncingName] = useState('');

    useEffect(() => {
        if (initialValue) setUsername(initialValue);
    }, []);

    const { data } = useGetSuggestedUserDetailsQuery(debouncingName, {
        skip: debouncingName === '',
    });

    useEffect(() => {
        if (username == '') {
            setDebouncingName('');
            return;
        }
        const timer = setTimeout(() => {
            setDebouncingName(username);
        }, 500);
        return () => clearTimeout(timer);
    }, [username]);

    const handleSubmit = () => {
        onSearch(username.trim());
    };

    let listdata: string[] = [];
    if (data) {
        if (data.items != null) {
            listdata = data.items.map((item) => item.login);
        }
    }

    return (
        <SearchBoxWrapper>
            <Autocomplete
                freeSolo
                disablePortal
                options={!listdata ? [] : listdata}
                value={username}
                sx={{ width: 300 }}
                onChange={(_, newValue) =>
                    setUsername((newValue as string) || '')
                }
                onInputChange={(_, newInputValue) => setUsername(newInputValue)}
                renderInput={(params) => (
                    <TextField {...params} label="Enter github username" />
                )}
            />
            <SubmitButton variant="contained" onClick={handleSubmit}>
                Submit
            </SubmitButton>
        </SearchBoxWrapper>
    );
};
