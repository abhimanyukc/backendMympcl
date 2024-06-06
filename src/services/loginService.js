// services/loginService.js
const SignUp = require("../models/signUp");

async function authenticateUser(email, password) {
    const user = await SignUp.findOne({ email });
    if (user && user.password === password) {
        return user;
    }
    throw new Error("Invalid email or password");
}

module.exports = { authenticateUser };
