
//emiService.js
const Emi = require("../models/emi");
class EmiService {
     async createEmi(emiS) {
        return await Emi.insertMany(emiS);
     }  
    async getAllEmiS(){
        return await Emi.find();
    }
}
module.exports = new EmiService();