const lifeSavingService = require("../../services/lifeSavingService");

class LifeSavingController {

    async createLifeSaving(req,res) {
        try{
            const lifeSavingS = req.body;
            const saveLifeSaving = await lifeSavingService.createLifeSaving(lifeSavingS);
            res.json(saveLifeSaving);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllLifeSavingS(req, res){
        try{
              const lifeSavingS = await lifeSavingService.getAllLifeSavingS();
              res.json(lifeSavingS);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  LifeSavingController();