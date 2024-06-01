const informationService = require("../services/informationService");

class InformationController {

    async createInformation(req,res) {
        try{
            const informationS = req.body;
            const saveInformation = await informationService.createInformation(informationS);
            res.json(saveInformation);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllInformationS(req, res){
        try{
              const informationS = await informationService.getAllInformationS();
              res.json(informationS);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  InformationController();