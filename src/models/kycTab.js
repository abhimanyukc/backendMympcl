

//creating kycTab model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const kycTabSchema = new mongoose.Schema({
    
    tab:Number,
    name:String
})

const KycTab = mongoose.model("KycTab", kycTabSchema);

module.exports = KycTab;