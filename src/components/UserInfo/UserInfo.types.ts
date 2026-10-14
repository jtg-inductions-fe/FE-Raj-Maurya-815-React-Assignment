export interface GithubUser {
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
}

export interface UserInfoProps {
    user: GithubUser;
}
