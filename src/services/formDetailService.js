const FormDetail = require("../models/formDetail");

class FormDetailService {
       
    async createFormDetail(formDetails) {
        return await FormDetail.insertMany(formDetails);
    }

    async getAllFormDetails(){
        return await FormDetail.find();
    }
};

module.exports = new FormDetailService();