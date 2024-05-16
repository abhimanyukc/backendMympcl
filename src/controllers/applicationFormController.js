const applicationService = require("../services/applicationFormService");

class ApplicationController {

    async createApplication(req,res) {
        try{
            const {message, email, cv ,coverLetter} = req.body;
            const saveApplication = await applicationService.createApplication(message, email, cv, coverLetter);
            res.json(saveApplication);
        }  catch(error) {
            res.status(500).json({error:error.message})
        }
    }

    async getAllApplications(req, res){
        try{
            const applications = await applicationService.getAllApplications();
            res.json(applications);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
    }
}

module.exports = new ApplicationController();