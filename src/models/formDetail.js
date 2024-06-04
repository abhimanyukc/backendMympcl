
//creating formDetail model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const formDetailSchema = new mongoose.Schema({
    name:String,
    label: String,
    type: String,
    placeholder:String
})

const FormDetail = mongoose.model("FormDetail", formDetailSchema);

module.exports = FormDetail;