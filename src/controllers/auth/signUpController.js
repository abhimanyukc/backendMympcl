//signUpController.js
const signUpService = require("../../services/signUpService");

class SignUpController {
    constructor(signUpService) {
        this.signUpService = signUpService;
    }

    async createSignUp(req, res) {
        try {
            console.log('Request body:', req.body); // Add this line to log the request body
    
            const { name, email, password, confirmPassword, phone, address, accountType, accountNumber } = req.body;
    
            if (!name || !email || !password || !confirmPassword || !phone || !address || !accountType || !accountNumber) {
                return res.status(400).json({ error: "All fields are required" });
            }
    
            if (password !== confirmPassword) {
                return res.status(400).json({ error: "Passwords do not match" });
            }
    
            const saveSignUp = await this.signUpService.createSignUp(name, email, password, phone, address, accountType, accountNumber);
            res.json(saveSignUp);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    async getAllSignUps(req, res) {
        try {
            const signUps = await this.signUpService.getAllSignUps();
            res.json(signUps);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new SignUpController(signUpService);