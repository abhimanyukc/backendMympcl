
//creating contact model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const contactSchema = new mongoose.Schema({
    
    name:String,
    email: String,
    subject: String,
    message: String
})

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;