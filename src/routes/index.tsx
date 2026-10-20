import { createBrowserRouter } from 'react-router';

import { MainLayout } from '@layouts';
import { Error, NotFound, UserSearch } from '@pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <UserSearch /> },
            { path: '*', element: <NotFound /> },
        ],
    },
]);
