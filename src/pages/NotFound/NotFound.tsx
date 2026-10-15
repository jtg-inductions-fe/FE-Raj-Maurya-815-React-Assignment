import { Typography } from '@mui/material';

import { NotFoundImage, NotFoundWrapper } from './NotFound.styles';

export const NotFound = () => (
    <NotFoundWrapper>
        <NotFoundImage src="/images/not-found.webp" alt="404 not found" />
        <Typography variant="h4">OOPS! Page not found</Typography>
    </NotFoundWrapper>
);
