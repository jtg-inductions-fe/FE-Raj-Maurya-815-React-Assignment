import type { LocalUserData } from '@layouts';
import { useAuthenticateUserDetailsQuery } from '@services';

export const useAuth = () => {
    const userData = localStorage.getItem('userData');

    const token = userData
        ? (JSON.parse(userData) as LocalUserData).personal_access_token
        : '';

    const { data, isLoading } = useAuthenticateUserDetailsQuery(token, {
        skip: token === '',
    });

    const isAuthenticated = !!(data && data.login);

    return {
        isAuthenticated,
        isLoading,
        user: data || null,
    };
};
