

//interestRateService.js
const InterestRate = require("../models/interestRate");

class InterestRateService {
    
    async createInterestRates(interestRates) {
        return await InterestRate.insertMany(interestRates);
    }

    async getAllInterestRates(){
        return await InterestRate.find();
    }
};

module.exports = new InterestRateService();
