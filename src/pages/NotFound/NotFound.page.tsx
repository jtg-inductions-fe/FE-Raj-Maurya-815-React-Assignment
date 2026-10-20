import { Fallback } from '@components';

export const NotFound = () => (
    <Fallback
        imgSrc="/images/not-found.webp"
        imgAlt="404 not found"
        message="OOPS! Page not found"
    />
);
