import { createBrowserRouter } from 'react-router';

import { MainLayout } from '../layouts/Main';
import { Error } from '../pages/Error/Error.page';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { UserSearch } from '../pages/UserSearch';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'search-user', element: <UserSearch /> },
            { path: '*', element: <NotFound /> },
        ],
    },
]);
