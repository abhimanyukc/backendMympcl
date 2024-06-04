const HospitalAffiliationDetail = require("../models/hospitalAffiliationDetail");

class HospitalAffiliationDetailService {
       
    async createHospitalAffiliationDetail(hospitalAffiliationDetails) {
        return await HospitalAffiliationDetail.insertMany(hospitalAffiliationDetails);
    }

    async getAllHospitalAffiliationDetails(){
        return await HospitalAffiliationDetail.find();
    }
};

module.exports = new HospitalAffiliationDetailService();