import { Box, Button, styled } from '@mui/material';

export const SearchBoxWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: theme.typography.pxToRem(20),
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
    textTransform: 'capitalize',
    fontSize: theme.typography.pxToRem(16),
    borderRadius: theme.typography.pxToRem(10),
}));
