const Loan = require("../models/loan");

class LoanService {
       
    async createLoan(loans) {
        return await Loan.insertMany(loans);
    }

    async getAllLoans(){
        return await Loan.find();
    }
};

module.exports = new LoanService();