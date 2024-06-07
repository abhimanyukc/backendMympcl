const crypto = require("crypto");
const bcrypt = require('bcrypt');
const SignUp = require("../../models/signUp");
const transporter = require("../../configuration/nodemailer");

class PasswordResetController {
    async forgotPassword(req, res) {
        const { email } = req.body;
        try {
            const user = await SignUp.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: "User not found" });
            }
    
            const token = crypto.randomBytes(48).toString('hex'); // Generate secure token
            user.resetPasswordToken = token;
            user.resetPasswordExpires = Date.now() + (24 * 60 * 60 * 1000); // 24 hours
    
            await user.save();
    
            const mailOptions = {
                to: user.email,
                from: process.env.EMAIL_SENDER,
                subject: "Password Reset",
                html: `
                    <p>You are receiving this email because you (or someone else) have requested the reset of the password for your account.</p>
                    <p>Please click on the following link, or paste this into your browser to complete the process:</p>
                    <p><a href="${req.protocol}://${req.get('host')}/reset-password/${token}">Reset Password</a></p>
                    <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
                `
            };
    
            await transporter.sendMail(mailOptions);
    
            res.status(200).json({ message: "Password reset email sent" });
        } catch (error) {
            console.error('Error sending password reset email:', error);
            res.status(500).json({ error: "Error sending email" });
        }
    }
    
    async resetPassword(req, res) {
        const { token, newPassword } = req.body;
        try {
            const user = await SignUp.findOne({
                resetPasswordToken: token,
                resetPasswordExpires: { $gt: Date.now() },
            });
    
            if (!user) {
                return res.status(400).json({ error: "Invalid or expired reset token" });
            }
    
            const hashedPassword = await bcrypt.hash(newPassword, 10);
    
            user.password = hashedPassword;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
    
            await user.save();
    
            res.status(200).json({ message: "Password has been reset successfully" });
        } catch (error) {
            console.error('Error resetting password:', error);
            res.status(500).json({ error: error.message });
        }
    }
    
    async verifyRecoveryCode(req, res) {
        const { recoveryCode } = req.body;
        try {
            const user = await SignUp.findOne({
                resetPasswordToken: recoveryCode,
                resetPasswordExpires: { $gt: Date.now() },
            });
    
            if (!user) {
                return res.status(400).json({ error: "Invalid or expired recovery code" });
            }
    
            res.status(200).json({ message: "Recovery code is valid" });
        } catch (error) {
            console.error('Error verifying recovery code:', error);
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PasswordResetController();
