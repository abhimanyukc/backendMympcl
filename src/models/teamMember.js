
//creating teamMember model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const teamMemberSchema = new mongoose.Schema({
    
    name:String,
    position: String,
    imageUrl: String
})

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);

module.exports = TeamMember;