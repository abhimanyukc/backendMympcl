
const mongoose = require("../configuration/dbConfig");

const signUpSchema = new mongoose.Schema({
    name:String,
    email: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    phone:String,
    address:String,
    accountType:String,
    accountNumber:String
})

const SignUp = mongoose.model("SignUp", signUpSchema);

module.exports = SignUp
