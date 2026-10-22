import { Fallback } from '@components';

import disclaimerSymbol from '/images/Disclaimer-Symbol.webp';

/**
 * Appears when application crashes.
 * Displays a disclaimer image and a failure message.
 */
export const Error = () => (
    <Fallback
        imgSrc={disclaimerSymbol}
        imgAlt="something went wrong"
        message="OOPS! Something Went Wrong"
    />
);
