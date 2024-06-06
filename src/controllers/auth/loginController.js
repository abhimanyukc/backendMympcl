// controllers/auth/loginController.js
const loginService = require("../../services/loginService");

class LoginController {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await loginService.authenticateUser(email, password);
            res.json({ message: "Login successful", user });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }
}

module.exports = new LoginController();
