
//creating services model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const serviceSchema = new mongoose.Schema({
    
    date:String,
    text: String,
})

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;