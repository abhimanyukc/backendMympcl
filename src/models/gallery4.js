
//creating gallery4 model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const gallery4Schema = new mongoose.Schema({
    
    no:Number,
    imageUrl: String,
    altText: String,
})

const Gallery4 = mongoose.model("Gallery4", gallery4Schema);

module.exports = Gallery4;