import { useEffect, useState } from 'react';

import { Outlet, useNavigate } from 'react-router';

import { CircularProgress } from '@mui/material';

export const AuthLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const localStorageData = localStorage.getItem('userData');

    useEffect(() => {
        if (
            localStorageData === null ||
            localStorageData === undefined ||
            localStorageData === ''
        )
            void navigate('/login', { replace: true });
        else setIsLoading(false);
    }, [localStorageData, navigate]);
    if (isLoading) {
        return <CircularProgress aria-label="Loading…" />;
    }
    return <Outlet />;
};
