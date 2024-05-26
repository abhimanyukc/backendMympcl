
//creating download form model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const downloadFormSchema = new mongoose.Schema({
    
    name:String,
    link:String
})

const DownloadForm = mongoose.model("DownloadForm", downloadFormSchema);

module.exports = DownloadForm;