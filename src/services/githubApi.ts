import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { GithubUser } from '../components/UserInfo';

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
    endpoints: (builder) => ({
        getUserDetails: builder.query<GithubUser, string>({
            query: (username) => `users/${username}`,
        }),
    }),
});

export const { useGetUserDetailsQuery } = githubApi;
