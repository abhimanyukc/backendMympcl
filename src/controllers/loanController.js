const loanService = require("../services/loanService");

class LoanController {

    async createLoan(req,res) {
        try{
            const loans = req.body;
            const saveLoan = await loanService.createLoan(loans);
            res.json(saveLoan);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllLoans(req, res){
        try{
              const loans = await loanService.getAllLoans();
              res.json(loans);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  LoanController();