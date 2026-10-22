import { ErrorBoundary } from 'react-error-boundary';

import { Alert } from '@mui/material';

import { LoginContainer } from '@containers';

/**
 * Login page with its container wrapped in error boundary.
 */
export const Login = () => (
    <ErrorBoundary
        fallback={<Alert severity="error">Something went wrong</Alert>}
    >
        <LoginContainer />
    </ErrorBoundary>
);
