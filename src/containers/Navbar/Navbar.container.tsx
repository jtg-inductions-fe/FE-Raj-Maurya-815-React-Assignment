import { useLocation, useNavigate } from 'react-router';

import { Box, Stack, Toolbar, Typography, useTheme } from '@mui/material';

import { CustomButton } from '@components';
import { useAuth } from '@hooks';
import { github } from '@services';
import { appStore } from '@store';

import { StyledNavbar } from './Navbar.styles';

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
        palette: {
            text: { primary },
        },
    } = useTheme();

    //Constants
    const isHomePage = location.pathname === '/';
    const isProfilePage = location.pathname === '/profile';

    //Event handlers
    //Remove data from local storage and clear store, then navigate user to login page.
    const logoutHandler = () => {
        localStorage.removeItem('userData');
        appStore.dispatch(github.util.resetApiState());
        Promise.resolve(navigate('/login')).catch(() => undefined);
    };
    const goTo = (path: string) => () => {
        Promise.resolve(navigate(path)).catch(() => undefined);
    };

    return (
        <StyledNavbar color="transparent" elevation={0} position="sticky">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Stack
                    flexDirection="row"
                    gap={pxToRem(10)}
                    onClick={goTo('/')}
                    sx={{ cursor: 'pointer' }}
                >
                    <Box
                        component="img"
                        src="/images/brand-logo.webp"
                        sx={{ height: pxToRem(30) }}
                    />
                    <Typography variant="h4">Github Finder</Typography>
                </Stack>

                <Stack
                    flexDirection="row"
                    sx={{ gap: { xs: pxToRem(4), md: pxToRem(10) } }}
                >
                    {!isHomePage && (
                        <CustomButton
                            variant="outlined"
                            fontSize={15}
                            textColor={primary}
                            borderColor={primary}
                            onClick={goTo('/')}
                        >
                            Search User
                        </CustomButton>
                    )}
                    {isAuthenticated && isHomePage && (
                        <>
                            <CustomButton
                                variant="outlined"
                                fontSize={15}
                                textColor={primary}
                                borderColor={primary}
                                onClick={goTo('/profile')}
                            >
                                profile
                            </CustomButton>
                            <CustomButton
                                fontSize={15}
                                textColor={primary}
                                borderColor={primary}
                                variant="outlined"
                                onClick={logoutHandler}
                            >
                                logout
                            </CustomButton>
                        </>
                    )}
                    {!isAuthenticated && isHomePage && (
                        <>
                            <CustomButton
                                textColor={primary}
                                borderColor={primary}
                                fontSize={15}
                                variant="outlined"
                                onClick={goTo('/login')}
                            >
                                login
                            </CustomButton>
                        </>
                    )}

                    {isProfilePage && (
                        <CustomButton
                            fontSize={15}
                            textColor={primary}
                            borderColor={primary}
                            variant="outlined"
                            onClick={logoutHandler}
                        >
                            logout
                        </CustomButton>
                    )}
                </Stack>
            </Toolbar>
        </StyledNavbar>
    );
};
