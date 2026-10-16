import { Typography } from '@mui/material';

import { ErrorImage, ErrorWrapper } from './Error.styles';

export const Error = () => (
    <ErrorWrapper>
        <ErrorImage
            src="/images/Disclaimer-Symbol.webp"
            alt="something went wrong"
        />
        <Typography variant="h4">OOPS! Something Went Wrong</Typography>
    </ErrorWrapper>
);
