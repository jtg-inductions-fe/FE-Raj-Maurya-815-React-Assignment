export interface LoginProps {
    onSearch: (username: string, password: string) => void;
    alert: boolean;
}

export type LoginFormInput = {
    username: string;
    password: string;
};
