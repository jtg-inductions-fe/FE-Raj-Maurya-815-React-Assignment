import React from 'react';

/**
 * Represet button props type.
 */
export type CustomButtonProps = {
    variant?: 'outlined' | 'contained';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    width?: number;
    height?: number;
    marginLeft?: number;
    marginRight?: number;
    fontSize?: number;
    textColor?: string;
    borderColor?: string;
    flexShrink?: number;
    disabled?: true | false;
};
