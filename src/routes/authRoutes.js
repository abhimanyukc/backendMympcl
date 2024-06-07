const express = require('express');
const loginController = require("../controllers/auth/loginController");
const signUpController = require("../controllers/auth/signUpController");
const passwordResetController = require("../controllers/auth/passwordResetController");

const router = express.Router();

// Login route
router.post("/login", loginController.login);

// Signup route
router.post("/signup", signUpController.createSignUp);

// Forgot password route
router.post("/forgot-password", passwordResetController.forgotPassword);

// Reset password route
router.post("/reset-password/:token", passwordResetController.resetPassword);

module.exports = router;
