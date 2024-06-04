const formDetailService = require("../services/formDetailService");

class FormDetailController {

    async createFormDetail(req,res) {
        try{
            const formDetails = req.body;
            const saveFormDetail = await formDetailService.createFormDetail(formDetails);
            res.json(saveFormDetail);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllFormDetails(req, res){
        try{
              const formDetails = await formDetailService.getAllFormDetails();
              res.json(formDetails);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  FormDetailController();