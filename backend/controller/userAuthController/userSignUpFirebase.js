const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const HttpError = require('../../models/http-error');
const { transport } = require('../../mail/index');
const User = require("../../models/user");


exports.userSignUpFirebase = async (req, res, next) => {
    const errors = validationResult(req);

    // const fbAdmin=req.fbAdmin
  
  
    if (!errors.isEmpty()) {
  
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }
  
  
    const {  userName, email,imageUrl, password, phoneNo, institution } =
      req.body;
  
  
  
    let hashedPassword, createdUser;
  
    console.log(req.authType);
  
      try {
        hashedPassword = await bcrypt.hash(password, 12);
  
  
      } catch (err) {
        console.log(err);
        const error = new HttpError(
          'Could not create user, please try again.',
          500
        );
        return next(error);
      }
  
  
      createdUser = new User({
        // _id:ObjectId("507f1f77bcf86cd799439011"),
        user_id:req.user_id,
        userName,
        email,
        favourite:[],
        imageUrl,
        password: hashedPassword,
        phoneNo,

      });
  
  
  
      ///Sending Welcome mail
  
      const mailOptions = {
        from: `noreply<${process.env.GMAIL}>`, // Something like: Jane Doe <janedoe@gmail.com>
        to: email,
        subject: 'Thank You For Registration!!!', // email subject
        html: `
        <div style="width:80%;margin: auto;font-family:Georgia, 'Times New Roman', Times, serif;color:#414040">
        <div style="padding: 5px 10px;background-color:#1976D2;">
        <h3 style="font-weight: bold;color: #ffffff;">Hello ${userName}</h3></div>
        
        <div style="border-bottom:4px solid #03A9F4 ;font-weight: 200;">
            
            <div style="padding:50px 20px;"><span style="font-weight: 600;">A warm welcome to Movizer.</span>
            <br><p style="padding: 5px 10px;text-align: center;line-height: 180%;">An Online platform 
            
            where you can
     <span style="border-bottom: 1px solid #03A9F4;font-weight: 400;">choose your favourite shows and mark it in your calenders!</span>
            Never miss a movie update AGAIN.
            
            
            </p></div>
            
        </div>
        </div>
        
        
        
        `
        // email content in HTML
      };
      // returning result
      transport.sendMail(mailOptions, (erro, info) => {
        console.log(erro)
        const error = new HttpError(
          'Sending mail failed.',
          500
        );
        return next(error);
    
      });
    
  
    

  
  
    try {
      await createdUser.save();
    } catch (err) {
      console.log(err)
      const error = new HttpError(
        'Signing up failed, please try again.',
        500
      );
      return next(error);
    }
  
  
  
  
  
  
  
  
    let token
    // let newImageURL = getSignedUrl(createdUser.imageUrl);
    try {
      token = jwt.sign(
        { uid: createdUser.user_id, email: createdUser.email, phoneNo: createdUser.phoneNo },
        process.env.PASS_KEY
      );
  
  
    } catch (err) {
      console.log(err)
      const error = new HttpError(
        'Signing up failed, please try again.',
        500
      );
      return next(error);
    }

    
  
    res.status(200)
      .json({
        user: {
          // user_id: createdUser.user_id,
          userName: createdUser.userName,
          email: createdUser.email,
          phoneNo: createdUser.phoneNo?createdUser.phoneNo:"",
          imageUrl: createdUser.imageUrl,
        },
        favourite:createdUser.favourite,
        token: token,
      });
  
  
  
  
  }
