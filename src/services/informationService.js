const Information = require("../models/information");

class InformationService {
       
    async createInformation(informationS) {
        return await Information.insertMany(informationS);
    }

    async getAllInformationS(){
        return await Information.find();
    }
};

module.exports = new InformationService();