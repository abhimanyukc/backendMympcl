const downloadFormService = require("../services/downloadFormService");

class DownloadFormController {

    async createDownloadForm(req,res) {
        try{
            const {name, link} = req.body;
            const saveDownloadForm = await downloadFormService.createDownloadForm(name, link);
            res.json(saveDownloadForm);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllDownloadForms(req, res){
        try{
              const downloadForms = await downloadFormService.getAllDownloadForms();
              res.json(downloadForms);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  DownloadFormController();