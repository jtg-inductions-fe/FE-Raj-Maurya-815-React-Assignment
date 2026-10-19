import { useLocation, useNavigate } from 'react-router';

import { Typography } from '@mui/material';

import {
    ActionWrapper,
    BrandLogoWrapper,
    BrandWrapper,
    ButtonWrapper,
    NavbarWrapper,
    ToolbarWrapper,
} from './Navbar.styles';
import { LocalUserData } from '../../layouts/Main/Main.types';
import {
    github,
    useAuthenticateUserDetailsQuery,
} from '../../services/github.service';
import { appStore } from '../../store/app.store';

export const Navbar = () => {
    const navigate = useNavigate();
    const userData = localStorage.getItem('userData');
    const location = useLocation();
    const token = userData
        ? (JSON.parse(userData) as LocalUserData).personal_access_token
        : '';

    const { data } = useAuthenticateUserDetailsQuery(token, {
        skip: token === '',
    });

    const isLoggedIn = !!data?.login;
    const isHomePage = location.pathname === '/';
    const isSearchUserPage = location.pathname === '/search-user';
    const isProfilePage = location.pathname === '/profile';

    const logoutHandler = () => {
        localStorage.removeItem('userData');
        appStore.dispatch(github.util.resetApiState());
        void navigate('/login');
    };

    return (
        <NavbarWrapper position="sticky">
            <ToolbarWrapper>
                <BrandWrapper>
                    <BrandLogoWrapper src="/images/brand-logo.webp" />
                    <Typography variant="h4">Github Finder</Typography>
                </BrandWrapper>

                <ActionWrapper>
                    {!isSearchUserPage && (
                        <ButtonWrapper
                            variant="outlined"
                            onClick={() => void navigate('/search-user')}
                        >
                            Search User
                        </ButtonWrapper>
                    )}
                    {isLoggedIn && (isHomePage || isSearchUserPage) && (
                        <>
                            <ButtonWrapper
                                variant="outlined"
                                onClick={() => void navigate('/profile')}
                            >
                                profile
                            </ButtonWrapper>
                            <ButtonWrapper
                                variant="outlined"
                                onClick={logoutHandler}
                            >
                                logout
                            </ButtonWrapper>
                        </>
                    )}
                    {!isLoggedIn && isSearchUserPage && (
                        <>
                            <ButtonWrapper
                                variant="outlined"
                                onClick={() => void navigate('/login')}
                            >
                                login
                            </ButtonWrapper>
                        </>
                    )}

                    {isProfilePage && (
                        <ButtonWrapper
                            variant="outlined"
                            onClick={logoutHandler}
                        >
                            logout
                        </ButtonWrapper>
                    )}
                </ActionWrapper>
            </ToolbarWrapper>
        </NavbarWrapper>
    );
};
