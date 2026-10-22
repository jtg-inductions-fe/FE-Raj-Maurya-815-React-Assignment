import { ErrorBoundary } from 'react-error-boundary';

import { Alert } from '@mui/material';

import { UserSearchContainer } from '@containers';

/**
 * user-search page with its container wrapped in error boundary.
 */
export const UserSearch = () => (
    <ErrorBoundary
        fallback={<Alert severity="error">Something went wrong</Alert>}
    >
        <UserSearchContainer />;
    </ErrorBoundary>
);
