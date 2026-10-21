export type LoginProps = {
    onSearch: (username: string, password: string) => void;
    alert: boolean;
    alertMessage: string;
};

export type LoginFormInput = {
    username: string;
    password: string;
};
