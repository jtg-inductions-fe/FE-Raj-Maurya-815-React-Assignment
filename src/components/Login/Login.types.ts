/**
 * Represent type of login component props.
 */
export type LoginProps = {
    onSearch: (username: string, password: string) => void;
    alert: boolean;
    alertMessage: string;
};

/**
 * Represent type of login form fields.
 */
export type LoginFormInput = {
    username: string;
    password: string;
};
