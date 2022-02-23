import React, {FC} from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";

export const Navbar: FC = () => {
    return (
        <AppBar color='secondary' elevation={2} position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Sierentz Global Merchants
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
