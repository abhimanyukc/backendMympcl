
const Emi = require("../models/emi");
class EmiService {
     async createEmi(loanType, loanAmount, interestRate, duration, yearlyInterest) {
        const newEmi = new Emi({loanType,loanAmount,interestRate,duration, yearlyInterest});
        return await newEmi.save()
     }

     
    async getAllEmi(){
        return await Emi.find();
    }
}
module.exports = new EmiService();
