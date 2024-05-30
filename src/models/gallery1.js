
//creating gallery1 model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const gallery1Schema = new mongoose.Schema({
    
    no:String,
    imageUrl: String,
    altText: String,
})

const Gallery1 = mongoose.model("Gallery1", gallery1Schema);

module.exports = Gallery1;