const kycTabService = require("../services/kycTabService");

class KycTabController {

    async createKycTab(req,res) {
        try{
            const kycTabs = req.body;
            const saveKycTab = await kycTabService.createKycTab(kycTabs);
            res.json(saveKycTab);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllKycTabs(req, res){
        try{
              const kycTabs = await kycTabService.getAllKycTabs();
              res.json(kycTabs);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  KycTabController();