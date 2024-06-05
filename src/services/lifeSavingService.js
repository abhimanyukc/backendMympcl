const LifeSaving = require("../models/lifeSaving");

class LifeSavingService {
       
    async createLifeSaving(lifeSavingS) {
        return await LifeSaving.insertMany(lifeSavingS);
    }

    async getAllLifeSavingS(){
        return await LifeSaving.find();
    }
};

module.exports = new LifeSavingService();