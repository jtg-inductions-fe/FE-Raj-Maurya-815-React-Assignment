import { StyledButton } from './Button.styles';
import { CustomButtonProps } from './Button.types';

/**
 *
 * custom button to be used everywhere.
 */
export const CustomButton = ({
    variant = 'contained',
    onClick,
    width,
    height,
    marginLeft,
    marginRight,
    fontSize,
    children,
}: CustomButtonProps) => (
    <StyledButton
        variant={variant}
        onClick={onClick}
        width={width}
        height={height}
        marginLeft={marginLeft}
        marginRight={marginRight}
        fontSize={fontSize}
    >
        {children}
    </StyledButton>
);
