import { URLS } from '@constant';
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
            return headers;
        },
    }),
    endpoints: () => ({}),
});
