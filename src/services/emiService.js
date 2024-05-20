
//emiService.js
const Emi = require("../models/emi");
class EmiService {
     async createEmi(loanType, loanAmount, interestRate, duration, monthlyEMI) {
        const newEmi = new Emi({loanType,loanAmount,interestRate,duration, monthlyEMI});
        return await newEmi.save()
     }

     
    async getAllEmi(){
        return await Emi.find();
    }
}
module.exports = new EmiService();
