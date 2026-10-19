import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SearchContainer = styled(Stack)(({ theme }) => ({
    marginTop: theme.typography.pxToRem(100),
    alignItems: 'center',
    gap: theme.typography.pxToRem(20),
}));

export const MainHeading = styled(Typography)(({ theme }) => ({
    marginBottom: theme.typography.pxToRem(20),
}));
