import { Box, useTheme } from '@mui/material';

export const Navbar = () => {
    const {
        palette: { divider, background },
        typography: { pxToRem },
    } = useTheme();
    return (
        <Box
            component="nav"
            height={pxToRem(65)}
            bgcolor={background.paper}
            boxShadow={0}
            borderBottom={`${pxToRem(1)} solid`}
            borderColor={divider}
        ></Box>
    );
};
