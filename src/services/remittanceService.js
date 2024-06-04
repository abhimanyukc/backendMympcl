

//remittanceService.js
const Remittance = require("../models/remittance");

class RemittanceService {
       
    async createRemittance(remittances) {
        return await Remittance.insertMany(remittances);
    }

    async getAllRemittances(){
        return await Remittance.find();
    }
};

module.exports = new RemittanceService();