
//creating department model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const departmentSchema = new mongoose.Schema({
    
    title:String,
    img: String,
    content: String
})

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;