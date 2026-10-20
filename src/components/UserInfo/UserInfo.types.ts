export interface GithubUser {
    avatar_url: string;
    login: string;
    name: string | null;
    location: string | null;
    following: number;
    followers: number;
    bio: string | null;
    html_url: string;
    blog: string | null;
    email: string | null;
}

export interface UserInfoProps {
    user: GithubUser;
    isLogin?: boolean;
    isFollowing?: boolean;
    handleFollow?: () => void;
}

export interface GithubSuggestedUser {
    login: string;
}

export interface GithubSuggestedUserResponse {
    items: GithubSuggestedUser[] | null;
}
