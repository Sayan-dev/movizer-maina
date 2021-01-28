import { useState, useCallback, useEffect } from 'react';

let logoutTimer;

export const useAuth=()=>{
const [token, setToken] = useState();     //Will be changed to false
const [authModalOpen,setAuthModalOpen]=useState();
const [tokenExpire,setTokenExpire]=useState();
const [userId,setUserId]=useState(null);
const [emailId,setEmailId]=useState(null);
const [imgId,setImgId]=useState(null);



const login = useCallback((userName,emailId,imgId,token,expireTime) => {
  setToken(token);
  setUserId(userName);
  setEmailId(emailId);
  setImgId(imgId);
  setAuthModalOpen(false)
  const tokenExpireTime=expireTime || new Date(new Date().getTime()+1000*60*60);
  setTokenExpire(tokenExpireTime);
  localStorage.setItem(
    'userData',
    JSON.stringify({userName:userName,emailId:emailId,imageUrl:imgId,token:token,expires:tokenExpireTime.toISOString()})
  );
}, []);

const logout = useCallback(() => {
  setToken(null);
  setTokenExpire(null);
  setUserId(null);
  setImgId(null);
  setAuthModalOpen(true);

  localStorage.removeItem('userData');

}, []);
useEffect(()=>{
  if(token && tokenExpire){
    const remainingTime=tokenExpire.getTime()-new Date().getTime();
    logoutTimer=setTimeout(logout,remainingTime);

  }else{
    clearTimeout(logoutTimer);
  }
},[token,logout,tokenExpire]);


useEffect(()=>{
  const storedData=JSON.parse(localStorage.getItem('userData'));
  if(storedData && storedData.token && new Date(storedData.expires) > new Date()){
    login(storedData.userId,storedData.emailId,storedData.imgId,storedData.token,new Date(storedData.expires))
  }
},[login]);
    return {token,login,logout,userId,emailId,imgId,setAuthModalOpen,authModalOpen};
}
