import type { GithubSuggestedUserResponse, GithubUser } from '@components';
import { URLS } from '@constant';

import { github } from './base.service';

/**
 * Extends the base GitHub service by adding endpoints.
 */
export const githubExtended = github.injectEndpoints({
    endpoints: (builder) => ({
        getUserDetails: builder.query<GithubUser, string>({
            query: (username) => URLS.USER_DETAILS(username),
        }),
        getSuggestedUserDetails: builder.query<
            GithubSuggestedUserResponse,
            string
        >({
            query: (username) => URLS.SUGGESTED_USERS(username),
        }),
        authenticateUserDetails: builder.query<GithubUser, string>({
            query: (password) => ({
                url: URLS.USER,
                headers: {
                    Authorization: `Bearer ${password}`,
                },
            }),
        }),
    }),
});

export const {
    useGetUserDetailsQuery,
    useGetSuggestedUserDetailsQuery,
    useAuthenticateUserDetailsQuery,
} = githubExtended;
