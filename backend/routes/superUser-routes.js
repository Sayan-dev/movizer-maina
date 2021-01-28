const express = require('express');
const { check } = require('express-validator');
const {multer}=require('../middleware/file-upload');



const verifyController = require('../controller/verify-controllers');
const {userSignInFirebase,userSignUpFirebase} = require('../controller/userAuthController/index');

const {checkVerified,checkNotVerified}=require('../middleware/check-verified');
const { fileUploadHandler } = require('../aws/fileHandling');
const { checkStudent, checkTeacher } = require('../middleware/check-auth');
const { checkUserFireBase } = require('../middleware/checkUserFirebase');
const { checkSuperUser } = require('../middleware/checkUser');
const { uploadCSVController } = require('../controller/superUserUploadController/uploadCSVController');

const router = express.Router();

// router.get("/",
//     usersController.getUsers)


// fileUpload.single('image'),    
router.post("/superUser/upoadCSV",
checkSuperUser,
multer.single('csv_file'),
uploadCSVController
)














module.exports = router;
