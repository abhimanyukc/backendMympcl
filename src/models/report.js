
//creating report model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const reportSchema = new mongoose.Schema({
    
    imgSrc:String,
    title: String,
    description: String,
    publishedDate: String,
})

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;