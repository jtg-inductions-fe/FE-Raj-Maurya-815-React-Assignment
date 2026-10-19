import { Stack, styled } from '@mui/material';

export const ProfileContainerWrapper = styled(Stack)(({ theme }) => ({
    marginTop: theme.typography.pxToRem(100),
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.typography.pxToRem(20),
}));
