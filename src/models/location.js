
//creating location model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const locationSchema = new mongoose.Schema({
    
    title:String,
    address: String,
    phone: String,
    email: String
})

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;