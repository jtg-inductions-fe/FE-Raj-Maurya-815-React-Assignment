export type UserListItem = {
    login: string;
    avatar_url: string;
};

export type SearchBoxProps = {
    onSearch: (username: string) => void;
    initialValue: string | null;
    searchBoxLabel: string | null;
    listdata: UserListItem[];
    onInputChange: (username: string) => void;
};
