import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
    GithubSuggestedUserResponse,
    GithubUser,
} from '../components/UserInfo';

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
    }),
});

export const { useGetUserDetailsQuery, useGetSuggestedUserDetailsQuery } =
    github;
