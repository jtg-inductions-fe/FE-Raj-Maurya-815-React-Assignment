export interface SearchBoxProps {
    onSearch: (username: string) => void;
    initialValue: string | null;
}
