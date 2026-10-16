import { createBrowserRouter } from 'react-router';

import { AuthLayout } from '../layouts/AuthLayout';
import { MainLayout } from '../layouts/Main';
import { Error } from '../pages/Error';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { ProfilePage } from '../pages/Profile';
import { UserSearch } from '../pages/UserSearch';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'search-user', element: <UserSearch /> },
            { path: 'login', element: <Login /> },
            {
                element: <AuthLayout />,
                children: [{ path: 'profile', element: <ProfilePage /> }],
            },
            { path: '*', element: <NotFound /> },
        ],
    },
]);
