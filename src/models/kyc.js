
//creating kyc model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const kycSchema = new mongoose.Schema({
    
    firstName:String,
    middleName: String,
    lastName: String,
    Gender: String,
    MaritalStatus:String,
    FamilyStatus:String,
    Education:String,
    Cast:String,
    Religion:String,
    Occupation:String,
    HouseType:String,
    RoofType:String,
    FamilyNo:String,
    DateOfBirth:String,
    CitizenshipNo:String,
    IssuedFrom:String,
    IssuedDate:String,
    YearlyTaxNumber:String,
    RuralMunicipality:String,
    District:String,
    Province:String,
    WardNo:String,
    Tole:String,
    FamilyMemberName:String,
    Relationship:String,
    MobileNo:String,
    IncomeHead:String,
    YearlyIncomeAmount:String,
    ExpenseHead:String,
    ExpenseAmount:String,
    NoOfHouse:String,
    RoofOfHouse:String,
    NoOfRoom:String,
    Cost:String,

})

const Kyc = mongoose.model("Kyc", kycSchema);

module.exports = Kyc;