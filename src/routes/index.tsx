import { createBrowserRouter } from 'react-router';

import { Error } from '../pages/Error/Error';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);
