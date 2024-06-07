const express = require('express');
const authService = require('../services/authService');

const router = express.Router();

// Route for sending password reset email (forgot password)
router.post('/forgot', async (req, res) => {
    try {
        const { email } = req.body;
        const token = await authService.generateResetToken(email);
        const resetUrl = `${req.protocol}://${req.get('host')}/reset-password/${token}`; // Adjust accordingly
        await authService.sendResetPasswordEmail(email, resetUrl);
        res.json({ message: 'Password reset email sent' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route for resetting password with token
router.post('/reset/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const { newPassword } = req.body;
        await authService.resetPassword(token, newPassword);
        res.json({ message: 'Password has been reset' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;