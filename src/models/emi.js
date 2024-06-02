

//creating emi model in nodejs
const mongoose = require("../configuration/dbConfig")

const emiSchema = new mongoose.Schema({
    loanType:String,
    interestRate: String,
    duration: String
})
const Emi = mongoose.model("Emi", emiSchema);
module.exports = Emi;