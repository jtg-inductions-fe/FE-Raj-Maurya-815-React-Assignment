import { createBrowserRouter } from 'react-router';

import { ROUTES } from '@constant';
import { MainLayout } from '@layouts';
import { Error, NotFound, UserSearch } from '@pages';

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <UserSearch /> },
            { path: ROUTES.NOT_FOUND, element: <NotFound /> },
        ],
    },
]);
