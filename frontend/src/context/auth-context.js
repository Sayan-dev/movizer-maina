import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  authModalOpen:false,
  token:null,
  userId:null,
  imgId:null,
  setAuthModal:()=>{},
  login: () => {},
  logout: () => {}
});
