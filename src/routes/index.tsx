import { createBrowserRouter } from 'react-router';

import { ROUTES } from '@constant';
import { Error } from '@pages';
import { Home } from '@pages';
import { NotFound } from '@pages';

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: ROUTES.NOT_FOUND,
        element: <NotFound />,
    },
]);
