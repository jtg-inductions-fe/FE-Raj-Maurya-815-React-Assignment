import { ErrorBoundary } from 'react-error-boundary';

import { Alert } from '@mui/material';

import { ProfileContainer } from '@containers';

/**
 * Profile page with its container wrapped in error boundary.
 */
export const ProfilePage = () => (
    <ErrorBoundary
        fallback={<Alert severity="error">Something went wrong</Alert>}
    >
        <ProfileContainer />
    </ErrorBoundary>
);
