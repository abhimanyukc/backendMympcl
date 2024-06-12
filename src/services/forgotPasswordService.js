// services/forgotPasswordService.js
const crypto = require('crypto');
const nodemailer = require('../configuration/nodemailer');
const SignUp = require('../models/signUp');

class ForgotPasswordService {
    async sendResetEmail(email) {
        const user = await SignUp.findOne({ email });
        if (!user) {
            throw new Error("User with this email does not exist");
        }

        const token = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        const resetUrl = `http://localhost:3000/reset-password/${token}`;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Password Reset',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
            Please click on the following link, or paste this into your browser to complete the process:\n\n
            ${resetUrl}\n\n
            If you did not request this, please ignore this email and your password will remain unchanged.\n`
        };

        await nodemailer.sendMail(mailOptions);

        return { message: "Password reset email sent" };
    }
}

module.exports = new ForgotPasswordService();