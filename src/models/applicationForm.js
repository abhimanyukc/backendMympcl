
//models
const mongoose = require("../configuration/dbConfig");
const { Schema } = mongoose;

const applicationSchema = new Schema({
    message: String,
    email: String,
    cv: { type: String, required: true  }, 
    coverLetter: { type: String, required: true } // Reference to File model
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
