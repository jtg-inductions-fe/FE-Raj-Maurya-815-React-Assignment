import { type ChangeEvent, useState } from 'react';

import { TextField } from '@mui/material';

import { SearchBoxWrapper, SubmitButton } from './SearchBox.styles';
import { SearchBoxProps } from './SearchBox.types';

export const SearchBox = ({ onSearch }: SearchBoxProps) => {
    const [username, setUsername] = useState('');

    const handleSubmit = () => {
        onSearch(username.trim());
        setUsername('');
    };

    const handlechange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
    return (
        <SearchBoxWrapper>
            <TextField
                id="outlined-basic"
                label="Enter github userid"
                variant="outlined"
                value={username}
                onChange={handlechange}
            />
            <SubmitButton variant="contained" onClick={handleSubmit}>
                Submit
            </SubmitButton>
        </SearchBoxWrapper>
    );
};
