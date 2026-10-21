import { URLS } from '@constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
