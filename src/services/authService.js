const SignUp = require("../models/signUp");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const transporter = require("../configuration/nodemailer"); // Injected transporter

require('dotenv').config();

class AuthService {
    async login(email, password) {
        const user = await SignUp.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            throw new Error('Invalid email or password');
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { user, token };
    }

    async sendResetPasswordEmail(email, resetUrl) {
        const user = await SignUp.findOne({ email });
        if (!user) throw new Error('No user with that email');

        const token = generateRandomToken(); // Implement token generation securely

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        const mailOptions = {
            to: email,
            from: process.env.EMAIL_USER,
            subject: 'Password Reset',
            text: `Click the following link to reset your password: ${resetUrl}`
        };

        await transporter.sendMail(mailOptions);
    }

    async resetPassword(token, newPassword) {
        const user = await SignUp.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) throw new Error('Password reset token is invalid or has expired');

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();
    }
}

module.exports = new AuthService();

// Function to generate a random token securely
function generateRandomToken() {
    return crypto.randomBytes(32).toString('hex');
}
