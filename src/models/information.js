
//creating information model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const informationSchema = new mongoose.Schema({
    
    no:Number,
    message:String,
    link:String,
})

const Information = mongoose.model("Information", informationSchema);

module.exports = Information;