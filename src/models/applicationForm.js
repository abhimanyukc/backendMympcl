
//creating contact model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const applicationSchema = new mongoose.Schema({
    
    message:String,
    email: String,
    cv: String,
    coverLetter: String
})

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;