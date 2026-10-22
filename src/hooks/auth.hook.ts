import { useEffect } from 'react';

import type { LocalUserData } from '@layouts';
import { useLazyAuthenticateUserDetailsQuery } from '@services';

/**
 * Custom hook that grabs the user's token from local storage, validates it
 * using the GitHub API, and returns their login status, loading state, and profile data.
 */
export const useAuth = () => {
    const userData = localStorage.getItem('userData');

    const token = userData
        ? (JSON.parse(userData) as LocalUserData).personal_access_token
        : '';

    const [authenticateUser, { data, isLoading, isUninitialized }] =
        useLazyAuthenticateUserDetailsQuery();

    useEffect(() => {
        void authenticateUser(token);
    }, [token]);

    const isAuthenticated = !!(data && data.login);

    return {
        isAuthenticated,
        isLoading: isLoading || (!!token && isUninitialized),
        user: data || null,
    };
};
