
//creating gallery3 model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const gallery3Schema = new mongoose.Schema({
    
    no:String,
    imageUrl: String,
    altText: String,
})

const Gallery3 = mongoose.model("Gallery3", gallery3Schema);

module.exports = Gallery3;