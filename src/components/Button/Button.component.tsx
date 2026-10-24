import { StyledButton } from './Button.styles';
import { CustomButtonProps } from './Button.types';

/**
 *
 * custom button to be used everywhere.
 */
export const CustomButton = ({
    variant = 'contained',
    children,
    ...rest
}: CustomButtonProps) => (
    <StyledButton variant={variant} {...rest}>
        {children}
    </StyledButton>
);
