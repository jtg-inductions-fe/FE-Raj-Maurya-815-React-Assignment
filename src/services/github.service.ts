import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
    GithubSuggestedUserResponse,
    GithubUser,
} from '../components/UserInfo';
import { AuthenticatedUserResponse } from '../components/UserInfo/UserInfo.types';

export const github = createApi({
    reducerPath: 'github',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
    endpoints: (builder) => ({
        getUserDetails: builder.query<GithubUser, string>({
            query: (username) => `users/${username}`,
        }),
        getSuggestedUserDetails: builder.query<
            GithubSuggestedUserResponse,
            string
        >({
            query: (username) => `search/users?q=${username}`,
        }),
        authenticateUserDetails: builder.query<
            AuthenticatedUserResponse,
            string
        >({
            query: (password) => ({
                url: `/user`,
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
