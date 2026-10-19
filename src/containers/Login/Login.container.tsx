import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router';

import { LoginWrapper } from './Login.styles';
import { AuthenticateUserArg } from './Login.types';
import { Login } from '../../components/Login';
import { useAuthenticateUserDetailsQuery } from '../../services/github.service';

export const LoginContainer = () => {
    const navigate = useNavigate();
    const [loginDetail, setLoginDetail] = useState<AuthenticateUserArg>({
        username: '',
        password: '',
    });
    const [alert, setAlert] = useState<boolean>(false);
    const { data } = useAuthenticateUserDetailsQuery(loginDetail.password, {
        skip: loginDetail.username === '' || loginDetail.password === '',
    });

    const handleSearch = (username: string, password: string) => {
        setLoginDetail({ username: username, password: password });
    };

    useEffect(() => {
        if (data?.login) {
            if (data.login == loginDetail.username) {
                const updatedData = {
                    ...data,
                    personal_access_token: loginDetail.password,
                };
                localStorage.setItem('userData', JSON.stringify(updatedData));
                void navigate('/profile');
            } else {
                setAlert(true);
            }
        }
    }, [data, loginDetail]);

    return (
        <LoginWrapper>
            <Login onSearch={handleSearch} alert={alert} />
        </LoginWrapper>
    );
};
