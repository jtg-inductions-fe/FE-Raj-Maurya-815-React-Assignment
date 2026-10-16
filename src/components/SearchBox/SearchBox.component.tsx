import { useEffect, useState } from 'react';

import { Autocomplete, TextField } from '@mui/material';

import { SearchBoxWrapper, SubmitButton } from './SearchBox.styles';
import { SearchBoxProps } from './SearchBox.types';

export const SearchBox = ({
    onSearch,
    initialValue,
    listdata,
    onInputChange,
}: SearchBoxProps) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (initialValue) setUsername(initialValue);
    }, []);

    const handleSubmit = () => {
        onSearch(username.trim());
    };

    const handleUpdate = (value: string) => {
        setUsername(value);
        onInputChange(value);
    };

    return (
        <SearchBoxWrapper>
            <Autocomplete
                freeSolo
                disablePortal
                options={!listdata ? [] : listdata}
                value={username}
                sx={{ width: 300 }}
                onChange={(_, newValue) => setUsername(newValue || '')}
                onInputChange={(_, newInputValue) =>
                    handleUpdate(newInputValue)
                }
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
