
//creating notice model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const noticeSchema = new mongoose.Schema({
    
    text:String,
    date: String,
})

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = Notice;