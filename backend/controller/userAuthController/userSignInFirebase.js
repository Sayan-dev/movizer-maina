const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const HttpError = require('../../models/http-error');
const { transport } = require('../../mail/index');
const User = require("../../models/user");


exports.userSignInFirebase = async (req, res, next) => {


    if (!req.userNotFound) {
      const user = req.user
  
      // const newImageURL = getSignedUrl(user.imageUrl)
      // const newToken=
  
      // console.log(user);
  
      const newToken = jwt.sign(
        { uid: user.user_id, email: user.email, phoneNo: user.phoneNo },
        process.env.PASS_KEY
      );
  
      res.json({
        user: {
          userName: user.userName,
          email: user.email,
          phoneNo: user.phoneNo,
          institution: user.institution,
          imageUrl: user.imageUrl,
          isVerified: user.isVerified
        },
        mentor:user.mentor,
        superUser:user.superUser,
        userNotFound: false,
        token: newToken
      })
    }
    else {
      res.json({
        userNotFound: true,
        message: "Please Proceed to User Signup"
      })
    }
  
  
  
  }
  
  