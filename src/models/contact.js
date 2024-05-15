const mongoose = require("../configuration/dbConfig");

const contactSchema = new mongoose.Schema({
    name:String,
    email: String,
    subject: String,
    message: String
})

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;