

//controller file
const applicationService = require("../services/applicationFormService");

class ApplicationController {

    async createApplication(req, res) {
        try {
            const { message, email } = req.body;
            const cv = req.files.cv[0];
            const coverLetter = req.files.coverLetter[0];

            if (!cv || !coverLetter) {
                return res.status(400).json({ error: "Files are required" });
            }

            const saveApplication = await applicationService.createApplication(message, email, cv.path, coverLetter.path);
            
            // Prepend base URL to file paths
            saveApplication.cv = `${req.protocol}://${req.get('host')}/${saveApplication.cv?.replace(/\\/g, '/')}`;
            saveApplication.coverLetter = `${req.protocol}://${req.get('host')}/${saveApplication.coverLetter?.replace(/\\/g, '/')}`;

            
            res.json(saveApplication);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAllApplications(req, res) {
        try {
            let applications = await applicationService.getAllApplications();
            
            // Convert Mongoose documents to plain JavaScript objects
            applications = applications.map(application => application.toObject());
    
            // Prepend base URL to file paths for all applications
            applications = applications.map(application => ({
                ...application,
                cv: `${req.protocol}://${req.get('host')}/${application.cv?.replace(/\\/g, '/')}`,
                coverLetter: `${req.protocol}://${req.get('host')}/${application.coverLetter?.replace(/\\/g, '/')}`
            }));
    
            res.json(applications);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    
}

module.exports = new ApplicationController();
