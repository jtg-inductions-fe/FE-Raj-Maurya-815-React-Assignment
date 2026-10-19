import { Navigate, Outlet } from 'react-router';

import { CircularProgress } from '@mui/material';

import { LocalUserData } from '../layouts/Main/Main.types';
import { useAuthenticateUserDetailsQuery } from '../services/github.service';

export const Auth = () => {
    const userData = localStorage.getItem('userData');

    const token = userData
        ? (JSON.parse(userData) as LocalUserData).personal_access_token
        : '';

    const { data, isLoading } = useAuthenticateUserDetailsQuery(token, {
        skip: token === '',
    });

    if (isLoading) {
        return <CircularProgress aria-label="Loading…" />;
    }

    return data && data.login ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace={true} />
    );
};
