

//interestRateService.js
//creating interestRate model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const interestRateSchema = new mongoose.Schema({
    
    product:String,
    percentage: String,
})

const InterestRate = mongoose.model("InterestRate", interestRateSchema);

module.exports = InterestRate;