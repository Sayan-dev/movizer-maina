import React from 'react';
import { AppBar,  Slide, useScrollTrigger } from '@material-ui/core';


const HideOnScroll=(props)=> {
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {props.children}
      </Slide>
    );
  }


const NavBar = ({
    position='fixed',
    color='default',
    ...props
}) => {

    
    return (
        <HideOnScroll {...props}>
            <AppBar
                position={position}
                color={color}

            >
                {props.children}

            </AppBar>
        </HideOnScroll>

    );
};


export default NavBar;