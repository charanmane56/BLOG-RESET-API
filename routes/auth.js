const express = require("express");
const router = express.Router();
const {authController} = require("../controllers");
const {signupValidator,signinValidator,emailValidater, verifyUserValidator, recoverPasswordValidator,changePasswordValidator,updateProfileValidator} = require("../validators/auth");
const validate = require("../validators/validate");
const isAuth = require("../middlewares/isAuth")
router.post("/signup",signupValidator,validate,authController.signup); 

router.post("/signin", signinValidator,validate, authController.signin);

router.post("/send-verification-email",emailValidater,validate, authController.verifyCode )

router.post("/verify-user",verifyUserValidator,validate,authController.verifyUser)

router.post("/forgot-password-code",emailValidater,validate,authController.forgotPasswordCode)

router.post("/recover-password",recoverPasswordValidator,validate,authController.recoverPassword)

router.put("/change-password",changePasswordValidator,validate,isAuth,authController.changePassword)

router.put("/update-profile",updateProfileValidator,validate,isAuth,authController.updateProfile)

router.get("/current-user",isAuth,authController.currentUser)

module.exports = router;
