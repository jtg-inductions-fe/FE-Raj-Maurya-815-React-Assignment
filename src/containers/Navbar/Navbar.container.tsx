import { useLocation, useNavigate } from 'react-router';

import { Stack, Toolbar, Typography, useTheme } from '@mui/material';

import { useAuth } from '@hooks';
import { github } from '@services';
import { appStore } from '@store';

import { NavHeader } from './Navbar.styles';
import { BrandLogoWrapper, ButtonWrapper } from './Navbar.styles';

/**
 * Navigation bar- it displays the brand logo and
 * dynamically switches navigation buttons (Search, Profile, Login, Logout)
 * depending on what page the user is viewing and whether the user is authenticated or not.
 */
export const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { isAuthenticated } = useAuth();

    const {
        typography: { pxToRem },
    } = useTheme();

    const isHomePage = location.pathname === '/';
    const isProfilePage = location.pathname === '/profile';

    const logoutHandler = () => {
        localStorage.removeItem('userData');
        appStore.dispatch(github.util.resetApiState());
        void navigate('/login');
    };

    return (
        <NavHeader color="transparent" elevation={0} position="sticky">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Stack flexDirection="row" gap={pxToRem(10)}>
                    <BrandLogoWrapper src="/images/brand-logo.webp" />
                    <Typography variant="h4">Github Finder</Typography>
                </Stack>

                <Stack
                    flexDirection="row"
                    sx={{ gap: { xs: pxToRem(4), md: pxToRem(10) } }}
                >
                    {!isHomePage && (
                        <ButtonWrapper
                            variant="outlined"
                            onClick={() => void navigate('/')}
                        >
                            Search User
                        </ButtonWrapper>
                    )}
                    {isAuthenticated && isHomePage && (
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
                    {!isAuthenticated && isHomePage && (
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
                </Stack>
            </Toolbar>
        </NavHeader>
    );
};
