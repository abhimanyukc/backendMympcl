//services file

const Application = require("../models/applicationForm");

class ApplicationService {
       
    async createApplication(message, email, cv, coverLetter) {
        const newApplication = new Application({ message, email, cv, coverLetter });
        return await newApplication.save();
    }

    async getAllApplications() {
        return await Application.find();
    }
};

module.exports = new ApplicationService();
