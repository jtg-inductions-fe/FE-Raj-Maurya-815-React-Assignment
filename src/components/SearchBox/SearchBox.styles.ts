import { Button, styled } from '@mui/material';

export const SubmitButton = styled(Button)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        textTransform: 'capitalize',
        fontSize: pxToRem(16),
        borderRadius: pxToRem(10),
    }),
);
