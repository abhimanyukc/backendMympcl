const SignUp = require("../models/signUp");
const bcrypt = require('bcrypt');

class LoginService {
    async authenticateUser(email, password) {
        try {
            const user = await SignUp.findOne({ email });
            if (!user) {
                console.log("User not found with email:", email);
                throw new Error("Invalid email or password");
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                console.log("Password does not match for email:", email);
                throw new Error("Invalid email or password");
            }

            return user;
        } catch (error) {
            console.error("Authentication error:", error.message);
            throw new Error("Authentication failed");
        }
    }
}

module.exports = new LoginService();
