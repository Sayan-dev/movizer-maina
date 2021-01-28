import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './styles/theme';
import Routes from './routes/Routes';
import {useAuth} from './hooks/auth-hook'
import { AuthContext } from './context/auth-context';

function App() {
  const {token,login,logout,userId,imgId,authModalOpen,setAuthModalOpen}= useAuth();

  


  return (
    <AuthContext.Provider
    value={{ 
      isLoggedIn: !!token,
      authModalOpen:authModalOpen,
      token:token,
      userId:userId,
      imgId:imgId,
      setAuthModal: setAuthModalOpen,
      login: login, 
      logout: logout }}
  >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider >
  </AuthContext.Provider>

  );
}

export default App;
