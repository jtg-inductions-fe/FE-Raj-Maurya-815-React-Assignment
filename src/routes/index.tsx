import { createBrowserRouter } from 'react-router';

import { UserSearchContainer } from '../containers/UserSearchContainer';
import { AuthLayout } from '../layouts/AuthLayout';
import { MainLayout } from '../layouts/MainLayout';
import { Error } from '../pages/Error';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { ProfilePage } from '../pages/Profile';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'search-user', element: <UserSearchContainer /> },
            { path: 'login', element: <Login /> },
            {
                element: <AuthLayout />,
                children: [{ path: 'profile', element: <ProfilePage /> }],
            },
            { path: '*', element: <NotFound /> },
        ],
    },
]);
