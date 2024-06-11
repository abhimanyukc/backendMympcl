const authService = require("../../services/authService");

class AuthController {
    constructor(authService) {
        this.authService = authService;
    }

    async forgotPassword(req, res) {
        try {
            const { email } = req.body;
            const token = await this.authService.generateResetToken(email);
            const resetUrl = `${req.protocol}://${req.get('host')}/reset-password/${token}`;
            await this.authService.sendResetPasswordEmail(email, resetUrl);
            res.json({ message: 'Reset password email sent' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async resetPassword(req, res) {
        try {
            const { token } = req.params;
            const { newPassword } = req.body;
            await this.authService.resetPassword(token, newPassword);
            res.json({ message: 'Password reset successful' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new AuthController(authService);
