const hospitalAffiliationDetailService = require("../../services/hospitalAffiliationDetailService");

class HospitalAffiliationDetailController {

    async createHospitalAffiliationDetail(req,res) {
        try{
            const hospitalAffiliationDetails = req.body;
            const saveHospitalAffiliationDetail = await hospitalAffiliationDetailService.createHospitalAffiliationDetail(hospitalAffiliationDetails);
            res.json(saveHospitalAffiliationDetail);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllHospitalAffiliationDetails(req, res){
        try{
              const hospitalAffiliationDetails = await hospitalAffiliationDetailService.getAllHospitalAffiliationDetails();
              res.json(hospitalAffiliationDetails);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  HospitalAffiliationDetailController();