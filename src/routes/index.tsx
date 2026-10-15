import { createBrowserRouter } from 'react-router';

import { UserSearchContainer } from '../containers/UserSearchContainer';
import { MainLayout } from '../layouts/MainLayout';
import { Error } from '../pages/Error';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'search-user', element: <UserSearchContainer /> },
            { path: '*', element: <NotFound /> },
        ],
    },
]);
