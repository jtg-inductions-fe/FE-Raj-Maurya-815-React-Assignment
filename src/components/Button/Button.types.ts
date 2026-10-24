import React from 'react';

/**
 * Represet button props type.
 */
export type CustomButtonProps = {
    variant?: 'outlined' | 'contained';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    width?: string | number;
    height?: string | number;
    marginLeft?: number;
    marginRight?: number;
    fontSize?: number;
};
