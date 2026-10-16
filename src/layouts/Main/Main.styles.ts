import { Stack, styled } from '@mui/material';

export const MainLayoutWrapper = styled(Stack)(({ theme }) => ({
    height: '100vh',
    gap: theme.typography.pxToRem(100),
    backgroundColor: 'oklch(98.4% 0.003 247.858)',
}));
