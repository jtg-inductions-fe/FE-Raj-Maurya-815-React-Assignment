import { useEffect, useState } from 'react';

import {
    Autocomplete,
    Avatar,
    Stack,
    TextField,
    useTheme,
} from '@mui/material';

import { StyledSubmitButton } from './SearchBox.styles';
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
    //Hooks
    const [username, setUsername] = useState('');
    const {
        typography: { pxToRem },
    } = useTheme();

    //Event handler
    // Trims and submit current search input.
    const handleSubmit = () => {
        onSearch(username.trim());
    };
    //Update username and triggers parent input-change callback.
    const handleUpdate = (value: string) => {
        setUsername(value);
        onInputChange(value);
    };

    //useeffects
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
            <StyledSubmitButton variant="contained" onClick={handleSubmit}>
                submit
            </StyledSubmitButton>
        </Stack>
    );
};
