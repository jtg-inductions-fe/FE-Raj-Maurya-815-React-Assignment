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

        checkUserFollowing: builder.query<
            boolean,
            { target_username: string; token: string }
        >({
            query: ({ target_username, token }) => ({
                url: URLS.USER_FOLLOWING(target_username),
                headers: {
                    Authorization: `Bearer ${token}`,
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
                url: URLS.USER_FOLLOWING(target_username),
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
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
                    githubExtended.util.updateQueryData(
                        'getUserDetails',
                        target_username,
                        (draft) => {
                            if (draft) draft.followers += 1;
                        },
                    ),
                );
                const updateCheckUserFollowing = dispatch(
                    githubExtended.util.updateQueryData(
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
} = githubExtended;
