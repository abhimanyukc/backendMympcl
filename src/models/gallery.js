
//creating gallery model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const gallerySchema = new mongoose.Schema({
    
    no:String,
    title: String,
    imageUrl: String,
    linkUrl: String,
})

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;