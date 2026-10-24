import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { Alert, Stack, TextField, Typography, useTheme } from '@mui/material';

import { CustomButton } from '@components';
import { useLazyAuthenticateUserDetailsQuery } from '@services';

import { StyledLogin } from './Login.styles';
import { LoginFormInput } from './Login.types';

/**
 * Container that handles user login logic and ui.
 * It validates credentials and saves the user info along with token to local storage, and
 * redirects the user to profile page after successful login.
 */
export const LoginContainer = () => {
    // Hooks
    const navigate = useNavigate();
    const [loginDetail, setLoginDetail] = useState<LoginFormInput>({
        username: '',
        password: '',
    });
    const [alert, setAlert] = useState<boolean>(false);
    const {
        typography: { pxToRem },
    } = useTheme();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInput>();

    // Query to call github api, when submit button is clicked.
    const [authenticateUser, { data }] = useLazyAuthenticateUserDetailsQuery();

    // Event handler
    // Call authenticate user query when submit button is clicked.
    const onSubmit = (formData: LoginFormInput) => {
        void authenticateUser(formData.password);
        setLoginDetail({
            username: formData.username,
            password: formData.password,
        });
    };

    //useeffect
    //Checks entered username with reponse username, if matched-> successful, else failed.
    useEffect(() => {
        if (data?.login) {
            if (data.login == loginDetail.username) {
                const updatedData = {
                    ...data,
                    personal_access_token: loginDetail.password,
                };

                localStorage.setItem('userData', JSON.stringify(updatedData));
                void navigate('/profile');
            } else {
                setAlert(true);
            }
        }
    }, [data, loginDetail, navigate]);

    return (
        <Stack
            marginTop={pxToRem(250)}
            justifyContent="center"
            alignItems="center"
            height="100%"
        >
            <StyledLogin
                width={pxToRem(500)}
                height={pxToRem(500)}
                padding={pxToRem(60)}
                spacing={pxToRem(20)}
                textAlign="center"
            >
                <Typography variant="h1">Login</Typography>
                <Typography variant="h6">
                    Enter your github username as username and personal access
                    token as password
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
                <CustomButton
                    onClick={(e) => {
                        void handleSubmit(onSubmit)(e);
                    }}
                >
                    Submit
                </CustomButton>
                {alert && (
                    <Alert severity="error">
                        Incorrect username and password
                    </Alert>
                )}
            </StyledLogin>
        </Stack>
    );
};
