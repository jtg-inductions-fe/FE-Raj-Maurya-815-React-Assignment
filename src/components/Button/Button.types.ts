import React from 'react';

import { SxProps } from '@mui/material';

/**
 * Represet button props type.
 */
export type CustomButtonProps = {
    variant?: 'outlined' | 'contained';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    width?: number;
    height?: number;
    sx?: SxProps;
    fontSize?: number;
    textColor?: string;
    borderColor?: string;
    flexShrink?: number;
    disabled?: true | false;
};
