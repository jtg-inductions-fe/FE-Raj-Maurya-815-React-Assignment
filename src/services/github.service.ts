import type { GithubSuggestedUserResponse, GithubUser } from '@components';
import { URLS } from '@constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const github = createApi({
    reducerPath: 'github',
    baseQuery: fetchBaseQuery({ baseUrl: URLS.GITHUB }),
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
} = github;
