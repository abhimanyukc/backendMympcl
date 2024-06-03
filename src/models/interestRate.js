

// interestRate.js
const mongoose = require("../configuration/dbConfig");

const interestRateSchema = new mongoose.Schema({
    product: String,
    percentage: Number,
    category: String // New field to categorize intdet objects
});

const InterestRate = mongoose.model("InterestRate", interestRateSchema);

module.exports = InterestRate;
