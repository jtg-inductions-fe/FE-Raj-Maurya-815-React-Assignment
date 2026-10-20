export type SearchBoxProps = {
    onSearch: (username: string) => void;
    initialValue: string | null;
    searchBoxLabel: string | null;
    listdata: string[];
    onInputChange: (username: string) => void;
};
