const authService = require("../../services/authService");

class AuthController {
    constructor(authService) {
        this.authService = authService;
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const { user, token } = await this.authService.login(email, password);
            res.json({ user, token });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async forgotPassword(req, res) {
        try {
            const { email } = req.body;
            const token = await this.authService.generateResetToken(email);
            const resetUrl = `${req.protocol}://${req.get('host')}/api/reset-password/${token}`; // Adjust accordingly
            await this.authService.sendResetPasswordEmail(email, resetUrl);
            res.json({ message: 'Reset password email sent' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async resetPassword(req, res) {
        try {
            const { token, newPassword } = req.body;
            await this.authService.resetPassword(token, newPassword);
            res.json({ message: 'Password reset successful' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async recoveryConfirmation(req, res) {
        res.json({ message: 'Recovery confirmed' });
    }
}

module.exports = new AuthController(authService);
