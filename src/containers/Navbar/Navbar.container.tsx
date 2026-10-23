import { useLocation, useNavigate } from 'react-router';

import { Stack, Toolbar, Typography, useTheme } from '@mui/material';

import { useAuth } from '@hooks';
import { github } from '@services';
import { appStore } from '@store';

import { StyledNavbar } from './Navbar.styles';
import { StyledBrandLogo, StyledButton } from './Navbar.styles';

/**
 * Navigation bar- it displays the brand logo and
 * dynamically switches navigation buttons (Search, Profile, Login, Logout)
 * depending on what page the user is viewing and whether the user is authenticated or not.
 */
export const Navbar = () => {
    //Hooks
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated } = useAuth();
    const {
        typography: { pxToRem },
    } = useTheme();

    //Constants
    const isHomePage = location.pathname === '/';
    const isProfilePage = location.pathname === '/profile';

    //Event handlers
    //Remove data from local storage and clear store, then navigate user to login page.
    const logoutHandler = () => {
        localStorage.removeItem('userData');
        appStore.dispatch(github.util.resetApiState());
        void navigate('/login');
    };

    return (
        <StyledNavbar color="transparent" elevation={0} position="sticky">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Stack flexDirection="row" gap={pxToRem(10)}>
                    <StyledBrandLogo src="/images/brand-logo.webp" />
                    <Typography variant="h4">Github Finder</Typography>
                </Stack>

                <Stack
                    flexDirection="row"
                    sx={{ gap: { xs: pxToRem(4), md: pxToRem(10) } }}
                >
                    {!isHomePage && (
                        <StyledButton
                            variant="outlined"
                            onClick={() => void navigate('/')}
                        >
                            Search User
                        </StyledButton>
                    )}
                    {isAuthenticated && isHomePage && (
                        <>
                            <StyledButton
                                variant="outlined"
                                onClick={() => void navigate('/profile')}
                            >
                                profile
                            </StyledButton>
                            <StyledButton
                                variant="outlined"
                                onClick={logoutHandler}
                            >
                                logout
                            </StyledButton>
                        </>
                    )}
                    {!isAuthenticated && isHomePage && (
                        <>
                            <StyledButton
                                variant="outlined"
                                onClick={() => void navigate('/login')}
                            >
                                login
                            </StyledButton>
                        </>
                    )}

                    {isProfilePage && (
                        <StyledButton
                            variant="outlined"
                            onClick={logoutHandler}
                        >
                            logout
                        </StyledButton>
                    )}
                </Stack>
            </Toolbar>
        </StyledNavbar>
    );
};
