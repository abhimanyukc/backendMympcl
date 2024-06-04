

//kycTabService.js
const KycTab = require("../models/kycTab");

class KycTabService {
       
    async createKycTab(kycTabs) {
        return await KycTab.insertMany(kycTabs);
    }

    async getAllKycTabs(){
        return await KycTab.find();
    }
};

module.exports = new KycTabService();