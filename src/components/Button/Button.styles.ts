import { Button, styled } from '@mui/material';

import { CustomButtonProps } from './Button.types';

export const StyledButton = styled(Button, {
    shouldForwardProp: (prop) =>
        !['width', 'height', 'fontSize', 'borderColor', 'textColor'].includes(
            prop as string,
        ),
})<CustomButtonProps>(({
    theme,
    borderColor,
    width,
    height,
    fontSize,
    textColor,
    flexShrink,
}) => {
    const {
        typography: { pxToRem },
    } = theme;

    return {
        borderRadius: pxToRem(10),
        textTransform: 'capitalize',
        flexShrink: 0,
        ...(width !== undefined && { width: pxToRem(width) }),
        ...(height !== undefined && { height: pxToRem(height) }),
        ...(fontSize !== undefined && { fontSize: pxToRem(fontSize) }),
        ...(textColor && { color: textColor }),
        ...(borderColor && { borderColor }),
        ...(flexShrink && { flexShrink }),
    };
});
