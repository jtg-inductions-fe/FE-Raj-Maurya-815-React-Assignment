import type { GithubSuggestedUserResponse, GithubUser } from '@components';
import { URLS } from '@constant';

import { github } from './base.service';

/**
 * Extends the base GitHub service by adding endpoints.
 */
export const userApi = github.injectEndpoints({
    endpoints: (builder) => ({
        //Fetches profile details for a user.
        getUserDetails: builder.query<GithubUser, string>({
            query: (username) => URLS.USER_DETAILS(username),
        }),

        //Fetches matching user profiles for search suggestions.
        getSuggestedUserDetails: builder.query<
            GithubSuggestedUserResponse,
            string
        >({
            query: (username) => URLS.SUGGESTED_USERS(username),
        }),

        //Fetch user detail using personal access token.
        authenticateUserDetails: builder.query<GithubUser, string>({
            query: (password) => ({
                url: URLS.USER,
                headers: {
                    Authorization: `Bearer ${password}`,
                },
            }),
        }),

        // Checks whether authenticated user follow a target user or not.
        checkUserFollowing: builder.query<boolean, { target_username: string }>(
            {
                query: ({ target_username }) => ({
                    url: URLS.USER_FOLLOWING(target_username),
                    responseHandler: (response) => response.text(),
                    validateStatus: (response) =>
                        response.status === 204 || response.status === 404,
                }),
                transformResponse: (_, meta) => meta?.response?.status === 204,
            },
        ),

        // Authenticated user follows a target user.
        followUser: builder.mutation<
            boolean,
            { username: string; target_username: string }
        >({
            query: ({ target_username }) => ({
                url: URLS.USER_FOLLOWING(target_username),
                method: 'PUT',
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
                { target_username },
                { dispatch, queryFulfilled },
            ) {
                const updateUserDetail = dispatch(
                    userApi.util.updateQueryData(
                        'getUserDetails',
                        target_username,
                        (draft) => {
                            if (draft) draft.followers += 1;
                        },
                    ),
                );
                const updateCheckUserFollowing = dispatch(
                    userApi.util.updateQueryData(
                        'checkUserFollowing',
                        { target_username },
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
    useLazyGetUserDetailsQuery,
    useLazyAuthenticateUserDetailsQuery,
    useAuthenticateUserDetailsQuery,
    useGetSuggestedUserDetailsQuery,
    useCheckUserFollowingQuery,
    useFollowUserMutation,
} = userApi;
