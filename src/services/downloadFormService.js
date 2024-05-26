const DownloadForm = require("../models/downloadForm");

class DownloadFormService {
       
    async createDownloadForm(name, link) {
        const newDownloadForm = new DownloadForm({ name, link});
        return await newDownloadForm.save()
    }

    async getAllDownloadForms(){
        return await DownloadForm.find();
    }
};

module.exports = new DownloadFormService();