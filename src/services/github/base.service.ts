import { URLS } from '@constant';
import { LocalUserData } from '@layouts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * Base RTK Query configuration for connecting to GitHub.
 * It handles the base URL and sets up API version in headers for all requests.
 */
export const github = createApi({
    reducerPath: 'github',
    baseQuery: fetchBaseQuery({
        baseUrl: URLS.GITHUB,
        prepareHeaders: (headers) => {
            headers.set('Accept', 'application/vnd.github+json');
            headers.set('X-GitHub-Api-Version', '2026-03-10');

            const userData = localStorage.getItem('userData');

            const token = userData
                ? (JSON.parse(userData) as LocalUserData).personal_access_token
                : '';

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});
