

//creating emi model in nodejs
const mongoose = require("../configuration/dbConfig")

const emiSchema = new mongoose.Schema({
    loanType:String,
    loanAmount:Number,
    interestRate: String,
    duration: String,
    monthlyEMI: Number
})
const Emi = mongoose.model("Emi", emiSchema);
module.exports = Emi;