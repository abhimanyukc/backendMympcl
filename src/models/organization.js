
//creating organization model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const organizationSchema = new mongoose.Schema({
    
    name:String,
    position: String,
    imageUrl: String
})

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;