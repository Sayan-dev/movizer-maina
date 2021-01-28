const jwt = require('jsonwebtoken');

const User=require("../models/user");
const HttpError=require("../models/http-error");
const { CHECK_CREDENTIALS_ERROR } = require('../constants/authConstants');


const checkUserFireBase=async(req,res,next)=>{
    if(req.method==="OPTIONS"){
        return next();
    }
    const {authType}=req.body
    req.authType=authType
        try {
            const fbtoken=req.headers.authorization.split(' ')[1];  //Authorization: 'Bearer TOKEN'

    
            let decodedToken;
            const admin=req.fbAdmin;
    
    
    
            decodedToken=await admin.auth().verifyIdToken(fbtoken)
                
    
            
            try {
                const user=await User.findOne({user_id:decodedToken.uid})
                // const user=await User.findOne({user_id:uid})

                if(user){

                    req.user=user
                    req.userNotFound=false
                    next();
                }
                else{
                    console.log("User Not found")
                    req.userNotFound=true
                    req.user_id=decodedToken.uid
                    next();
                }

    
                
            } catch (err) {

                console.log(err);
                req.userNotFound=true
                next();
            }
    

        } catch (err) {
            console.log(err);
            const error=new HttpError('Authentication has failed',401);
            next(error);
        }
    


}

exports.checkUserFireBase=checkUserFireBase