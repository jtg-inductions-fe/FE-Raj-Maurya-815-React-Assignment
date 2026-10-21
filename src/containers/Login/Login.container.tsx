import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router';

import { Stack, useTheme } from '@mui/material';

import { Login } from '@components';
import { useAuthenticateUserDetailsQuery } from '@services';

import { AuthenticateUserArg } from './Login.types';

export const LoginContainer = () => {
    const navigate = useNavigate();
    const [loginDetail, setLoginDetail] = useState<AuthenticateUserArg>({
        username: '',
        password: '',
    });
    const [alert, setAlert] = useState<boolean>(false);
    const { data } = useAuthenticateUserDetailsQuery(loginDetail.password, {
        skip: loginDetail.username === '' || loginDetail.password === '',
    });

    const handleSearch = (username: string, password: string) => {
        setLoginDetail({ username: username, password: password });
    };

    const {
        typography: { pxToRem },
    } = useTheme();

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
    }, [data, loginDetail]);

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
