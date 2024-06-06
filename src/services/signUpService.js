const SignUp = require("../models/signUp");

class SignUpService {

    async createSignUp(name,email,password,confirmPassword,phone,address,accountType,accountNumber){
        const newSignUp = new SignUp({ name,email,password,confirmPassword,phone,address,accountType,accountNumber});
        return await newSignUp.save();
    }

    async getAllSignUps()  {
         return await SignUp.find();
    }
};

module.exports = new SignUpService();