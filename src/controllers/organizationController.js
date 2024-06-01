const organizationService = require("../services/organizationService");

class OrganizationController {

    async createOrganization(req,res) {
        try{
            const organizations = req.body;
            const saveOrganization = await organizationService.createOrganization(organizations);
            res.json(saveOrganization);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllOrganizations(req, res){
        try{
              const organizations = await organizationService.getAllOrganizations();
              res.json(organizations);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  OrganizationController();