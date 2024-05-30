const reportService = require("../services/reportService");

class ReportController {

    async createReport(req,res) {
        try{
            const reports = req.body;
            const saveReport = await reportService.createReport(reports);
            res.json(saveReport);
        } catch(error) {
            res.status(500).json({error:error.message})
        }
    }

       async getAllReports(req, res){
        try{
              const reports = await reportService.getAllReports();
              res.json(reports);
        }catch(error) {
            res.status(500).json({error:error.message});
        }
       }
};

module.exports =  new  ReportController();