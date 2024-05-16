
const  emiService = require("../services/emiService");

 class EmiController {
          
    async createEmi(req,res) {
            try{
                const {loanType, loanAmount, interestRate, duration, yearlyInterest} = req.body;
                const saveEmi = await emiService.createEmi(loanType, loanAmount, interestRate, duration, yearlyInterest);
                res.json(saveEmi);
            } catch(error) {
                res.status(500).json({error:error.message})
            }
    }

    async getAllEmi(req, res){
        try{
              const emi = await emiService.getAllEmi();
              res.json(emi);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
 }

 module.exports = new EmiController();