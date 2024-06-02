
//emiController.js
const  emiService = require("../services/emiService");

 class EmiController {
          
    async createEmi(req,res) {
            try{
                const emiS = req.body;
                const saveEmi = await emiService.createEmi(emiS);
                res.json(saveEmi);
            } catch(error) {
                res.status(500).json({error:error.message})
            }
    }

    async getAllEmiS(req, res){
        try{
              const emiS = await emiService.getAllEmiS();
              res.json(emiS);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
 }

 module.exports = new EmiController();