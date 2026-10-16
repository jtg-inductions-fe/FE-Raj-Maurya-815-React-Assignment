export interface SearchBoxProps {
    onSearch: (username: string) => void;
    initialValue: string | null;
    listdata: string[];
    onInputChange: (username: string) => void;
}
