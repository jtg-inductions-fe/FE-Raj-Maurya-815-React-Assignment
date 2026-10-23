import { useForm } from 'react-hook-form';

import { Alert, TextField, Typography, useTheme } from '@mui/material';

import { StyledButton, StyledLogin } from './Login.styles';
import { LoginFormInput, LoginProps } from './Login.types';

/**
 * A login card that collects a user's GitHub-username as username and personal-access-token as password.
 * Validates the input formats, and displays error messages.
 */
export const Login = ({ onSearch, alert, alertMessage }: LoginProps) => {
    //Hooks
    const {
        typography: { pxToRem },
    } = useTheme();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInput>();

    //Event handler- call parent search function on submitting.
    const onSubmit = (data: LoginFormInput) => {
        onSearch(data.username, data.password);
    };

    return (
        <StyledLogin
            width={pxToRem(500)}
            height={pxToRem(500)}
            padding={pxToRem(60)}
            spacing={pxToRem(20)}
            textAlign="center"
        >
            <Typography variant="h1">Login</Typography>
            <Typography variant="h6">
                Enter your github username as username and personal access token
                as password
            </Typography>
            <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                required
                {...register('username', {
                    required: 'Username is required',
                    maxLength: {
                        value: 39,
                        message: 'Maximum allowed length is 39',
                    },
                    pattern: {
                        value: /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i,
                        message: 'Invalid username format',
                    },
                })}
                error={!!errors.username}
                helperText={errors.username?.message}
            />
            <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
                required
                {...register('password', {
                    required: 'Password is required',
                    pattern: {
                        value: /^(gh[ps]_[a-zA-Z0-9]{36}|github_pat_[a-zA-Z0-9]{22}_[a-zA-Z0-9]{59})$/,
                        message: 'Invalid password format',
                    },
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
            />
            <StyledButton
                variant="contained"
                onClick={(e) => {
                    void handleSubmit(onSubmit)(e);
                }}
            >
                Submit
            </StyledButton>
            {alert && <Alert severity="error">{alertMessage}</Alert>}
        </StyledLogin>
    );
};
