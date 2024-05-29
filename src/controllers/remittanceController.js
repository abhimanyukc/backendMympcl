const remittanceService = require("../services/remittanceService");

class RemittanceController {

    async createRemittance(req,res) {
        try{
            const remittances = req.body;
            const saveRemittance = await remittanceService.createRemittance(remittances);
            res.json(saveRemittance);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllRemittances(req, res){
        try{
              const remittances = await remittanceService.getAllRemittances();
              res.json(remittances);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  RemittanceController();