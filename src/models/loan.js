
//creating loan model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const loanSchema = new mongoose.Schema({
    
    image:String,
    title: String,
    description: String,
    route: String
})

const Loan = mongoose.model("Loan", loanSchema);

module.exports = Loan;