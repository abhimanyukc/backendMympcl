const crypto = require("crypto");
const bcrypt = require("bcrypt");
const SignUp = require("../models/signUp");
const transporter = require("../configuration/nodemailer");

class AuthService {
    async generateResetToken(email) {
        const user = await SignUp.findOne({ email });
        if (!user) {
            throw new Error("User not found");
        }

        const token = crypto.randomBytes(48).toString('hex');
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

        await user.save();
        return token;
    }

    async sendResetPasswordEmail(email, resetUrl) {
        const user = await SignUp.findOne({ email });
        if (!user) {
            throw new Error("User not found");
        }

        const mailOptions = {
            to: user.email,
            from: process.env.EMAIL_SENDER,
            subject: "Password Reset",
            html: `
                <p>You are receiving this email because you (or someone else) have requested the reset of the password for your account.</p>
                <p>Please click on the following link, or paste this into your browser to complete the process:</p>
                <p><a href="${resetUrl}">Reset Password</a></p>
                <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
            `
        };

        await transporter.sendMail(mailOptions);
    }

    async resetPassword(token, newPassword) {
        const user = await SignUp.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() },
        });

        if (!user) {
            throw new Error("Invalid or expired reset token");
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();
    }
}

module.exports = new AuthService();