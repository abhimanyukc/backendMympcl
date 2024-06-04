
//creating hospitalAffiliationDetail model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const hospitalAffiliationDetailSchema = new mongoose.Schema({
    
    date:String,
    text: String,
})

const HospitalAffiliationDetail = mongoose.model("HospitalAffiliationDetail", hospitalAffiliationDetailSchema);

module.exports = HospitalAffiliationDetail;