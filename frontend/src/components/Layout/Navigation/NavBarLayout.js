import React, { useContext, useState } from 'react';


import { CssBaseline, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import NavBar from '../../commons/NavMenu/NavBar';
import Button from '../../commons/Button/Button';
import { AuthContext } from '../../../context/auth-context';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbar: {
      minHeight: 60,

    },
    title: {
      flexGrow:1
    }
  }));




const NavBarLayout = ({
  setLoginModal,
  setLogOutModal,
  ...props
}) => {

  const classes = useStyles();



  const [anchorEl, setAnchorEl] = useState(null);


  const userAuth=useContext(AuthContext)


  const open = Boolean(anchorEl);




  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  let authButton;

  if(!userAuth.isLoggedIn){

    authButton=(
      <div>
      <Button onClick={()=>setLoginModal(true)} ascent="primary" color="secondary" variant="contained">
        SignUp/Login
      </Button>
    </div>
    )
  }
  else{
    
    authButton=(
      <div>
      <Button onClick={()=>setLogOutModal(true)} ascent="primary" color="secondary" variant="contained">
        LogOut
      </Button>
    </div>
    )
  }

    return (
      <>
      <CssBaseline />

                <NavBar position="sticky" color="primary">
                  <Toolbar  className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h2" color="inherit">
                    Movizer
                    </Typography>
                    {authButton}

                    {userAuth.isLoggedIn && (
                        <div>
                          <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                          >
                            <AccountCircle fontSize="large" />
                          </IconButton>
                          <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                          >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                          </Menu>
                        </div>
                      )}

                </Toolbar>
            </NavBar>
            </>
        
    );
};


export default NavBarLayout;