const healthProgramService = require("../services/healthProgramService");

class HealthProgramController {

    async createHealthProgram(req,res) {
        try{
            const healthPrograms = req.body;
            const saveHealthProgram = await healthProgramService.createHealthProgram(healthPrograms);
            res.json(saveHealthProgram);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllHealthPrograms(req, res){
        try{
              const healthPrograms = await healthProgramService.getAllHealthPrograms();
              res.json(healthPrograms);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  HealthProgramController();