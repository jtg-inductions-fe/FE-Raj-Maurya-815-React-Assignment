import { createBrowserRouter } from 'react-router';

import { ROUTES } from '@constant';
import { MainLayout } from '@layouts';
import { Error, Login, NotFound, ProfilePage, UserSearch } from '@pages';

import { Protected } from './Protected.route';

/**
 * Application router configuration.
 *
 */
export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <UserSearch /> },
            { path: ROUTES.LOGIN, element: <Login /> },
            {
                element: <Protected />,
                children: [{ path: ROUTES.PROFILE, element: <ProfilePage /> }],
            },
            { path: ROUTES.NOT_FOUND, element: <NotFound /> },
        ],
    },
]);
