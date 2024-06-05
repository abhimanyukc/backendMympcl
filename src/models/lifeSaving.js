
//creating lifeSaving model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const lifeSavingSchema = new mongoose.Schema({
    
    date:String,
    text: String
})

const LifeSaving = mongoose.model("LifeSaving", lifeSavingSchema);

module.exports = LifeSaving;