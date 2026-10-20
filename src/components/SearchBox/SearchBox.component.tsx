import { useEffect, useState } from 'react';

import { Autocomplete, Stack, TextField, useTheme } from '@mui/material';

import { SubmitButton } from './SearchBox.styles';
import { SearchBoxProps } from './SearchBox.types';

export const SearchBox = ({
    onSearch,
    initialValue,
    listdata,
    onInputChange,
    searchBoxLabel,
}: SearchBoxProps) => {
    const [username, setUsername] = useState('');

    const {
        typography: { pxToRem },
    } = useTheme();

    const handleSubmit = () => {
        onSearch(username.trim());
    };

    const handleUpdate = (value: string) => {
        setUsername(value);
        onInputChange(value);
    };

    useEffect(() => {
        if (initialValue) setUsername(initialValue);
    }, []);

    return (
        <Stack direction="row" justifyContent="center" spacing={pxToRem(20)}>
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
                    <TextField {...params} label={searchBoxLabel} />
                )}
            />
            <SubmitButton variant="contained" onClick={handleSubmit}>
                submit
            </SubmitButton>
        </Stack>
    );
};
