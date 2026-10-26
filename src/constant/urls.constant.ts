/**
 * API's URL used in the application.
 */
export const URLS = {
    GITHUB: 'https://api.github.com',
    USER: '/user',
    USER_DETAILS: (username: string) => `/users/${username}`,
    SUGGESTED_USERS: (username: string) => `/search/users?q=${username}`,
    USER_FOLLOWING: (target_username: string) =>
        `/user/following/${target_username}`,
};
