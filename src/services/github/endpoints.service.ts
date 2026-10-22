import type { GithubSuggestedUserResponse, GithubUser } from '@components';
import { URLS } from '@constant';

import { github } from './base.service';

/**
 * Extends the base GitHub service by adding endpoints.
 */
export const userApi = github.injectEndpoints({
    endpoints: (builder) => ({
        /**
         * Fetches profile details for a user.
         */
        getUserDetails: builder.query<GithubUser, string>({
            query: (username) => URLS.USER_DETAILS(username),
        }),

        /**
         * Fetches matching user profiles for search suggestions.
         */
        getSuggestedUserDetails: builder.query<
            GithubSuggestedUserResponse,
            string
        >({
            query: (username) => URLS.SUGGESTED_USERS(username),
        }),
    }),
});

export const {
    useGetUserDetailsQuery,
    useLazyGetUserDetailsQuery,
    useGetSuggestedUserDetailsQuery,
} = userApi;
