
//creating kyc model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const kycSchema = new mongoose.Schema({
    
    firstName:String,
    middleName: String,
    lastName: String,
    gender: String,
    maritalStatus:String,
    familyStatus:String,
    education:String,
    cast:String,
    religion:String,
    occupation:String,
    houseType:String,
    roofType:String,
    familyNo:String,
    dob:String,
    citizenshipNo:String,
    issuedFrom:String,
    issuedDate:String,
    yearlyTxnNumber:String,
    ruralMunicipality:String,
    district:String,
    province:String,
    wardNo:String,
    tole:String,
    noOfRoom:String,
    familyMember:String,
    relationship:String,
    mobileNo:String,
    incomeHead:String,
    yearlyIncomeAmount:String,
    expenseHead:String,
    roomCost:String,

})

const Kyc = mongoose.model("Kyc", kycSchema);

module.exports = Kyc;