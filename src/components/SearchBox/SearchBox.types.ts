/**
 * Type of user-item in autocomplete search suggestion.
 */
export type UserListItem = {
    login: string;
    avatar_url: string;
};

/**
 * Type of props in search box component.
 */
export type SearchBoxProps = {
    onSearch: (username: string) => void;
    initialValue: string | null;
    searchBoxLabel: string | null;
    listdata: UserListItem[];
    onInputChange: (username: string) => void;
};
