import { Outlet } from 'react-router';

import { CircularProgress } from '@mui/material';

import { CircularProgressWrapper, MainLayoutWrapper } from './Main.styles';
import { LocalUserData } from './Main.types';
import { Navbar } from '../../containers/Navbar';
import { useAuthenticateUserDetailsQuery } from '../../services/github.service';

export const MainLayout = () => {
    const userData = localStorage.getItem('userData');

    const token = userData
        ? (JSON.parse(userData) as LocalUserData).personal_access_token
        : '';

    const { isLoading } = useAuthenticateUserDetailsQuery(token, {
        skip: token === '',
    });

    if (isLoading)
        return (
            <CircularProgressWrapper>
                <CircularProgress aria-label="Loading…" />;
            </CircularProgressWrapper>
        );
    return (
        <MainLayoutWrapper>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </MainLayoutWrapper>
    );
};
