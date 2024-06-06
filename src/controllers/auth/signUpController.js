const signUpService = require("../../services/signUpService");

class SignUpController {

    async createSignUp(req,res) {
        try{
            const {name, email, password, confirmPassword,  phone, address, accountType, accountNumber} = req.body;
            const saveSignUp = await signUpService.createSignUp(name, email, password, confirmPassword,  phone, address, accountType, accountNumber);
            res.json(saveSignUp);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllSignUps(req, res){
        try{
              const signUps = await signUpService.getAllSignUps();
              res.json(signUps);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  SignUpController();