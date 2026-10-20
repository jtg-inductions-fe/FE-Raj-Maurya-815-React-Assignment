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
        authenticateUserDetails: builder.query<GithubUser, string>({
            query: (password) => ({
                url: `/user`,
                headers: {
                    Authorization: `Bearer ${password}`,
                },
            }),
        }),
        checkUserFollowing: builder.query<
            boolean,
            { target_username: string; token: string }
        >({
            query: ({ target_username, token }) => ({
                url: `/user/following/${target_username}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/vnd.github+json',
                    'X-GitHub-Api-Version': '2026-03-10',
                },
                responseHandler: (response) => response.text(),
                validateStatus: (response) =>
                    response.status === 204 || response.status === 404,
            }),
            transformResponse: (_, meta) => meta?.response?.status === 204,
        }),
        followUser: builder.mutation<
            boolean,
            { username: string; target_username: string; token: string }
        >({
            query: ({ target_username, token }) => ({
                url: `/user/following/${target_username}`,
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/vnd.github+json',
                    'X-GitHub-Api-Version': '2026-03-10',
                },
                responseHandler: (response) => response.text(),
            }),
            transformResponse: (_, meta) => meta?.response?.status === 204,
            transformErrorResponse: (response, meta) => {
                if (meta?.response?.status === 404) {
                    return false;
                }
                return response;
            },

            async onQueryStarted(
                { target_username, token },
                { dispatch, queryFulfilled },
            ) {
                const updateUserDetail = dispatch(
                    github.util.updateQueryData(
                        'getUserDetails',
                        target_username,
                        (draft) => {
                            if (draft) draft.followers += 1;
                        },
                    ),
                );
                const updateCheckUserFollowing = dispatch(
                    github.util.updateQueryData(
                        'checkUserFollowing',
                        { target_username, token },
                        () => true,
                    ),
                );
                try {
                    await queryFulfilled;
                } catch {
                    updateUserDetail.undo();
                    updateCheckUserFollowing.undo();
                }
            },
        }),
    }),
});

export const {
    useGetUserDetailsQuery,
    useGetSuggestedUserDetailsQuery,
    useAuthenticateUserDetailsQuery,
    useCheckUserFollowingQuery,
    useFollowUserMutation,
} = github;
