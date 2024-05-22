

const mongoose = require("../configuration/dbConfig");

const  careerSchema = new mongoose.Schema({
    to:String,
    primaryText:String,
    dangerText1: String,
    dangerText2: String,
    userText1: String,
    userText2: String,
    arrowText: String,
})
const Career = mongoose.model("Career", careerSchema);
module.exports = Career;