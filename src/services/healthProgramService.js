const HealthProgram = require("../models/healthProgram");

class HealthProgramService {
       
    async createHealthProgram(healthPrograms) {
        return await HealthProgram.insertMany(healthPrograms);
    }

    async getAllHealthPrograms(){
        return await HealthProgram.find();
    }
};

module.exports = new HealthProgramService();