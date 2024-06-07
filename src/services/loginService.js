// services/loginService.js
const SignUp = require("../models/signUp");
const bcrypt = require('bcrypt');

async function authenticateUser(email, password) {
    const user = await SignUp.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        return user;
    }
    throw new Error("Invalid email or password");
}

module.exports = { authenticateUser };
