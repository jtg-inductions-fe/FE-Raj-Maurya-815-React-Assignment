import { Button, styled } from '@mui/material';

import { CustomButtonProps } from './Button.types';

export const StyledButton = styled(Button, {
    shouldForwardProp: (prop) =>
        ![
            'width',
            'height',
            'marginLeft',
            'marginRight',
            'fontSize',
            'borderColor',
            'textColor',
        ].includes(prop as string),
})<CustomButtonProps>(({
    theme,
    borderColor,
    width,
    height,
    marginLeft,
    marginRight,
    fontSize,
    textColor,
}) => {
    const {
        typography: { pxToRem },
    } = theme;

    return {
        borderRadius: pxToRem(10),
        textTransform: 'capitalize',
        ...(width !== undefined && { width: pxToRem(width) }),
        ...(height !== undefined && { height: pxToRem(height) }),
        ...(marginLeft !== undefined && { marginLeft: pxToRem(marginLeft) }),
        ...(marginRight !== undefined && { marginRight: pxToRem(marginRight) }),
        ...(fontSize !== undefined && { fontSize: pxToRem(fontSize) }),
        ...(textColor && { color: textColor }),
        ...(borderColor && { borderColor }),
    };
});
