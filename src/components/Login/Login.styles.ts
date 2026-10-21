import { Button, Stack, styled } from '@mui/material';

export const LoginWrapper = styled(Stack)(
    ({
        theme: {
            typography: { pxToRem },
            shadows,
        },
    }) => ({
        borderRadius: pxToRem(30),
        boxShadow: shadows[6],
    }),
);

export const ButtonWrapper = styled(Button)(
    ({
        theme: {
            typography: { pxToRem },
        },
    }) => ({
        width: pxToRem(380),
        height: pxToRem(40),
        textTransform: 'capitalize',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: pxToRem(18),
    }),
);
