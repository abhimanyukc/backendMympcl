
//creating remittance model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const remittanceSchema = new mongoose.Schema({
    
    name:String,
    image: String,
    alt: String
})

const Remittance = mongoose.model("Remittance", remittanceSchema);

module.exports = Remittance;