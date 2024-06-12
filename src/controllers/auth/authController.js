const ForgotPasswordService = require('../../services/forgotPasswordService');
const AuthService = require('../../services/authService'); // Corrected import for authService

class AuthController {
    async forgotPassword(req, res) {
        const { email } = req.body;

        try {
            const response = await ForgotPasswordService.sendResetEmail(email);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async resetPassword(req, res) {
        const { token } = req.params;
        const { newPassword } = req.body;

        try {
            await AuthService.resetPassword(token, newPassword); // Using AuthService for resetting password
            res.status(200).json({ message: "Password has been updated" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new AuthController();
