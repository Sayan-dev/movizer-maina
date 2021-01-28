const jwt = require('jsonwebtoken');

const User=require("../models/user");
const HttpError=require("../models/http-error");



exports.checkUser=async(req,res,next)=>{
    if(req.method==="OPTIONS"){
        return next();
    }
    try {
        const token=req.headers.authorization.split(' ')[1];  //Authorization: 'Bearer TOKEN'
        console.log(token)
        if(!token){
            throw new Error("Authorization Failed!!");
        }
        

        const admin=req.fbAdmin;
        const decodedToken=await admin.auth().verifyIdToken(token)
        



        try {
            const user=await User.findOne({user_id:decodedToken.uid})
        
            if(user){
                req.user=user
                next();
            }else{
                
                // const error=new HttpError('Authentication failed',401);
                // next(error);
            }
            
        } catch (err) {
            console.log(err);
            const error=new HttpError('Authentication has failed',401);
            next(error);
        }

    } catch (err) {
        console.log(err);
            const error=new HttpError('Authentication failed',401);
            return next(error);
    }
}




exports.checkSuperUser=async(req,res,next)=>{
    if(req.method==="OPTIONS"){
        return next();
    }
    try {
        const token=req.headers.authorization.split(' ')[1];  //Authorization: 'Bearer TOKEN'
        console.log(token)
        if(!token){
            throw new Error("Authorization Failed!!");
        }
        const decodedToken=jwt.verify(token,process.env.PASS_KEY);

        // const admin=req.admin;
        // const decodedToken=await admin.auth().verifyIdToken(token)
        



        try {
            const user=await User.findOne({user_id:decodedToken.user_id,superUser:true})
        
            if(user){
                req.user=user
                next();
            }else{
                
                // const error=new HttpError('Authentication failed',401);
                // next(error);
            }
            
        } catch (err) {
            console.log(err);
            const error=new HttpError('Authentication has failed',401);
            next(error);
        }

    } catch (err) {
        console.log(err);
            const error=new HttpError('Authentication failed',401);
            return next(error);
    }
}
