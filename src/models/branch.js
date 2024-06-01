
//creating branch model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const branchSchema = new mongoose.Schema({
    
    title:String,
    address: String,
    phone: String,
    email:String
})

const Branch = mongoose.model("Branch", branchSchema);

module.exports = Branch;