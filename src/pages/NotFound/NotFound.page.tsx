import { Fallback } from '@components';

import notFoundImage from '/images/not-found.webp';

/**
 * Displays a not-found image and page not found message when an invalid url is hit.
 */
export const NotFound = () => (
    <Fallback
        imgSrc={notFoundImage}
        imgAlt="404 not found"
        message="OOPS! Page not found"
    />
);
