const Report = require("../models/report");

class ReportService {
       
    async createReport(reports) {
        return await Report.insertMany(reports);
    }

    async getAllReports(){
        return await Report.find();
    }
};

module.exports = new ReportService();