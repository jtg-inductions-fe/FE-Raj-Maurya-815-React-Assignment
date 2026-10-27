import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import {
    Alert,
    Box,
    Stack,
    TextField,
    Typography,
    useTheme,
} from '@mui/material';

import { CustomButton } from '@components';
import { useAuth } from '@hooks';
import { useLazyAuthenticateUserDetailsQuery } from '@services';

import { StyledLogin } from './Login.styles';
import { LoginFormInput } from './Login.types';

import BrandLogo from '/images/brand-logo-large.webp';

/**
 * Container that handles user login logic and ui.
 * It validates credentials and saves the user info along with token to local storage, and
 * redirects the user to profile page after successful login.
 */
export const LoginContainer = () => {
    // Hooks
    const navigate = useNavigate();
    const [alert, setAlert] = useState<boolean>(false);
    const {
        typography: { pxToRem },
        palette: { divider },
    } = useTheme();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInput>();
    const { isAuthenticated, isLoading } = useAuth();

    // Query to call github api, when submit button is clicked.
    const [authenticateUser] = useLazyAuthenticateUserDetailsQuery();

    // Event handler
    // Call authenticate user query when submit button is clicked.
    const onSubmit = async (formData: LoginFormInput) => {
        setAlert(false);
        try {
            const data = await authenticateUser(
                formData.personalAccessToken,
            ).unwrap();
            if (data?.login) {
                const updatedData = {
                    ...data,
                    personal_access_token: formData.personalAccessToken,
                };

                localStorage.setItem('userData', JSON.stringify(updatedData));
                await navigate('/profile');
            } else {
                setAlert(true);
            }
        } catch {
            setAlert(true);
        }
    };

    //useeffects
    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            (async () => {
                try {
                    await navigate('/profile', { replace: true });
                } catch {}
            })().catch(() => {});
        }
    }, [isAuthenticated, isLoading, navigate]);

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
                <Box
                    component="img"
                    src={BrandLogo}
                    sx={{ width: '100px', alignSelf: 'center' }}
                />
                <Typography variant="h1">Login</Typography>
                <Typography variant="h6">
                    Enter your github personal access token
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Personal access token"
                    type="password"
                    variant="outlined"
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: divider,
                        },
                    }}
                    required
                    {...register('personalAccessToken', {
                        required: 'personal access token is required',
                        pattern: {
                            value: /^(gh[ps]_[a-zA-Z0-9]{36}|github_pat_[a-zA-Z0-9]{22}_[a-zA-Z0-9]{59})$/,
                            message: 'Invalid personal access token format',
                        },
                    })}
                    error={!!errors.personalAccessToken}
                    helperText={errors.personalAccessToken?.message}
                />
                <CustomButton
                    onClick={(e) => {
                        handleSubmit(onSubmit)(e).catch(() => {});
                        return;
                    }}
                >
                    Submit
                </CustomButton>
                {alert && (
                    <Alert severity="error">
                        Incorrect personal access token
                    </Alert>
                )}
            </StyledLogin>
        </Stack>
    );
};
