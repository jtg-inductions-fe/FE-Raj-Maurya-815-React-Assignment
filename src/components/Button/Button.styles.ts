import { Button, styled } from '@mui/material';

import { CustomButtonProps } from './Button.types';

export const StyledButton = styled(Button, {
    shouldForwardProp: (prop) =>
        ![
            'width',
            'height',
            'textTransform',
            'marginLeft',
            'marginRight',
            'fontSize',
        ].includes(prop as string),
})<CustomButtonProps>(({
    theme,
    width = 'auto',
    height = 'auto',
    marginLeft = 0,
    marginRight = 0,
    fontSize = 14,
}) => {
    const {
        typography: { pxToRem },
    } = theme;

    return {
        width: typeof width === 'number' ? pxToRem(width) : width,
        height: typeof height === 'number' ? pxToRem(height) : height,
        borderRadius: pxToRem(10),
        textTransform: 'capitalize',
        marginLeft: pxToRem(marginLeft),
        marginRight: pxToRem(marginRight),
        fontSize: pxToRem(fontSize),
    };
});
