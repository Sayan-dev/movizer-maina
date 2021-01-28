import React,{useContext, useState} from 'react';
import PropTypes from 'prop-types';
import NavBarLayout from './Navigation/NavBarLayout';
import Modal from '../commons/Modal/Modal';
import { Container, Typography } from '@material-ui/core';
import LoginLayout from './Auth/Login/LoginLayout';
import SignupLayout from './Auth/SignUp/SignupLayout';
import { AuthContext } from '../../context/auth-context';
import Text from '../commons/Text';
import Button from '../commons/Button/Button';

const BaseLayout= props => {
    
    const [isSignUp,setIsSignUp]=useState(false)
    const [isLogOut,setIsLogOut]=useState(false)
    const userAuth=useContext(AuthContext);
    return (
        
            <>
            <NavBarLayout setLoginModal={userAuth.setAuthModal} setLogOutModal={setIsLogOut}/>
                {!userAuth.isLoggedIn && <Modal onClose={()=>userAuth.setAuthModal(false)}   title="Auth Screen" onOpen={userAuth.authModalOpen?userAuth.authModalOpen:false}  >
                    <Container >
                        {!isSignUp && <LoginLayout setLoginModal={userAuth.setAuthModal} setSignUp={setIsSignUp}/>}
                        {isSignUp && <SignupLayout setLoginModal={userAuth.setAuthModal} changeAuth={setIsSignUp}/>}
                    </Container>
                </Modal>}
                {
                   userAuth.isLoggedIn &&  <Modal 
                   
                   onClose={()=>setIsLogOut(false)} 
                   bgAscent="systemWash"  
                   title="Log Out" onOpen={isLogOut} 
                   action={(
                       <Container>
                           <Button color="secondary" onClick={()=>{setIsLogOut(false);userAuth.logout()}}>Logout</Button>
                           <Button color="default" onClick={()=>setIsLogOut(false)}>Cancel</Button>
                           
                       </Container>
                   )}
                    >
                        <Text>Do you want to logout?</Text>
                    </Modal>
                }
                {props.children}
            </>

            
            
        
    );
};



export default BaseLayout;