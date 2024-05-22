const careerService = require("../services/careerService");

class CareerController {

    async createCareer(req,res) {
        try{
            const {to, primaryText, dangerText1, dangerText2, userText1, userText2, arrowText} = req.body;
            const saveCareer = await careerService.createCareer(to, primaryText, dangerText1, dangerText2, userText1, userText2, arrowText);
            res.json(saveCareer);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllCareers(req, res){
        try{
              const careers = await careerService.getAllCareers();
              res.json(careers);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  CareerController();