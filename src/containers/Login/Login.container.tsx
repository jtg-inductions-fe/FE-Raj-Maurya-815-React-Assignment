import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router';

import { Stack, useTheme } from '@mui/material';

import { Login } from '@components';
import { LoginFormInput } from '@components';
import { useLazyAuthenticateUserDetailsQuery } from '@services';

/**
 * Container that handles user login logic.
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

    // Query to call github api, when submit button is clicked.
    const [authenticateUser, { data }] = useLazyAuthenticateUserDetailsQuery();

    // Event handler
    const handleSearch = (username: string, password: string) => {
        void authenticateUser(password);
        setLoginDetail({ username: username, password: password });
    };

    //useeffect
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
            <Login
                onSearch={handleSearch}
                alert={alert}
                alertMessage="Incorrect username and password"
            />
        </Stack>
    );
};
