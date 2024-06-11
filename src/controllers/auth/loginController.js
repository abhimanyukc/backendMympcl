
//loginController.js

//loginController.js
const loginService = require("../../services/loginService");

class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            
            // Input validation
            if (!email || !password) {
                return res.status(400).json({ error: "Email and password are required" });
            }

            const user = await this.loginService.authenticateUser(email, password);
            res.json({ message: "Login successful", user });
        } catch (error) {
            // Error handling
            console.error("Login error:", error);
            res.status(401).json({ error: "Invalid credentials" });
        }
    }
}

module.exports = new LoginController(loginService);
