const femaleNutritionService = require("../../services/femaleNutritionService");

class FemaleNutritionController {

    async createFemaleNutrition(req,res) {
        try{
            const femaleNutritionS = req.body;
            const saveFemaleNutrition = await femaleNutritionService.createFemaleNutrition(femaleNutritionS);
            res.json(saveFemaleNutrition);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllFemaleNutritionS(req, res){
        try{
              const femaleNutritionS = await femaleNutritionService.getAllFemaleNutritionS();
              res.json(femaleNutritionS);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  FemaleNutritionController();