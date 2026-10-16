import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router';

import { LoginWrapper } from './LoginContainer.styles';
import { Login } from '../../components/Login';
import { useAuthenticateUserDetailsQuery } from '../../services/github.service';

export const LoginContainer = () => {
    const navigate = useNavigate();
    const [loginDetail, setLoginDetail] = useState({
        username: '',
        password: '',
    });

    const { data } = useAuthenticateUserDetailsQuery(loginDetail.password, {
        skip: loginDetail.username === '' || loginDetail.password === '',
    });

    const handleSearch = (username: string, password: string) => {
        setLoginDetail({ username: username, password: password });
    };

    useEffect(() => {
        if (data?.login == loginDetail.username) {
            const updatedData = {
                ...data,
                personal_access_token: loginDetail.password,
            };
            localStorage.setItem('userData', JSON.stringify(updatedData));
            void navigate('/profile');
        }
    }, [data]);

    return (
        <LoginWrapper>
            <Login onSearch={handleSearch} />
        </LoginWrapper>
    );
};
