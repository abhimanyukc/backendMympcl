// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth/authController')

router.post('/forgot-password', AuthController.forgotPassword);
router.post('/reset-password/:token', AuthController.resetPassword);

module.exports = router;
