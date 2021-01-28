const express = require('express');
const { check } = require('express-validator');



const {userSignInFirebase,userSignUpFirebase} = require('../controller/userAuthController/index');

const { checkUserFireBase } = require('../middleware/checkUserFirebase');

const router = express.Router();


router.post("/signup",

checkUserFireBase,
userSignUpFirebase);



router.post("/login",

checkUserFireBase,userSignInFirebase);















module.exports = router;
