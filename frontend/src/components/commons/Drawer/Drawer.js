import React from 'react';
import { Drawer as MUIDrawer } from '@material-ui/core';

const Drawer = ({ children, className, ...props }) => {
    return (
        <MUIDrawer
            variant="temporary"
            {...props}
        >
            {children}
        </MUIDrawer >
    );
};

export default Drawer;