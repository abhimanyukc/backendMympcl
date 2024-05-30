
//creating healthProgram model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const healthProgramSchema = new mongoose.Schema({
    
    image:String,
    titles: String,
    button: String,
    information: String,
    route: String
})

const HealthProgram = mongoose.model("HealthProgram", healthProgramSchema);

module.exports = HealthProgram;