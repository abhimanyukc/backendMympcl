const signUpService = require("../../services/signUpService");

class SignUpController {
    constructor(signUpService) {
        this.signUpService = signUpService;
    }

    async createSignUp(req, res) {
        try {
            const { name, email, password, confirmPassword, phone, address, accountType, accountNumber } = req.body;
            // Validate input data
            if (!name || !email || !password || !confirmPassword || !phone || !address || !accountType || !accountNumber) {
                return res.status(400).json({ error: "All fields are required" });
            }
            if (password !== confirmPassword) {
                return res.status(400).json({ error: "Passwords do not match" });
            }
            // Hash password before passing it to the service
            // This should ideally be done in the service layer, but for simplicity, it's done here
            const hashedPassword = await bcrypt.hash(password, 10);
            const saveSignUp = await this.signUpService.createSignUp(name, email, hashedPassword, phone, address, accountType, accountNumber);
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
