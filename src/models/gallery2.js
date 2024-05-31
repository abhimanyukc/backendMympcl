
//creating gallery2 model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const gallery2Schema = new mongoose.Schema({
    
    no:Number,
    imageUrl: String,
    altText: String,
})

const Gallery2 = mongoose.model("Gallery2", gallery2Schema);

module.exports = Gallery2;