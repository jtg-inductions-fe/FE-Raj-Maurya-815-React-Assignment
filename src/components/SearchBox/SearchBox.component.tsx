import { useEffect, useState } from 'react';

import {
    Autocomplete,
    Avatar,
    Stack,
    TextField,
    useTheme,
} from '@mui/material';

import { SubmitButton } from './SearchBox.styles';
import { SearchBoxProps } from './SearchBox.types';

/**
 * UI component with seach field, autocomplete and a submit button.
 */
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
                getOptionLabel={(option) =>
                    typeof option === 'string' ? option : option.login
                }
                value={username}
                sx={{ width: 300 }}
                onChange={(_, newValue) =>
                    setUsername(
                        typeof newValue === 'string'
                            ? newValue
                            : newValue?.login || '',
                    )
                }
                onInputChange={(_, newInputValue) =>
                    handleUpdate(newInputValue)
                }
                renderOption={(props, option) => (
                    <Stack
                        component="li"
                        direction="row"
                        spacing={pxToRem(10)}
                        {...props}
                    >
                        <Avatar
                            src={option.avatar_url}
                            sx={{ width: pxToRem(28), height: pxToRem(28) }}
                            slotProps={{ img: { loading: 'lazy' } }}
                        />
                        <span>{option.login}</span>
                    </Stack>
                )}
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
