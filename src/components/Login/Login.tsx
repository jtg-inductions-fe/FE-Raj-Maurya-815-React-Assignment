import { useState } from 'react';

import { TextField, Typography } from '@mui/material';

import { ButtonWrapper, LoginWrapper } from './Login.styles';
import { LoginProps } from './Login.types';

export const Login = ({ onSearch }: LoginProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        onSearch(username, password);
    };

    return (
        <LoginWrapper>
            <Typography variant="h1">Login</Typography>
            <Typography variant="h6">
                Enter your github username as username and personal access token
                as password
            </Typography>
            <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonWrapper variant="contained" onClick={handleSubmit}>
                Submit
            </ButtonWrapper>
        </LoginWrapper>
    );
};
