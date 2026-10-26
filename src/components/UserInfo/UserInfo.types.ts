/**
 *  Type of github user details.
 */
export type GithubUser = {
    avatar_url: string;
    login: string;
    name: string | null;
    location: string | null;
    following: number;
    followers: number;
    bio: string | null;
    url: string;
    blog: string | null;
    email: string | null;
};

/**
 * Type used in props of userinfo component.
 */
export type UserInfoProps = {
    user: GithubUser;
};

/**
 * Type used in dropdown suggestion in search box.
 */
export type GithubSuggestedUser = {
    login: string;
    avatar_url: string;
    name: string | null;
};

/**
 * Type used for reponse of github api.
 */
export type GithubSuggestedUserResponse = {
    items: GithubSuggestedUser[] | null;
};
