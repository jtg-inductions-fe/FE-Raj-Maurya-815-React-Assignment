import { Box, Button, styled } from '@mui/material';

export const SearchBoxWrapper = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
}));

export const SubmitButton = styled(Button)(() => ({
    textTransform: 'capitalize',
    fontSize: '16px',
    borderRadius: '10px',
}));
