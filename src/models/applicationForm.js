const mongoose = require("../configuration/dbConfig");
const { Schema } = mongoose;

const applicationSchema = new Schema({
    message: String,
    email: String,
    cv: { type: Schema.Types.ObjectId, ref: 'File' }, // Reference to File model
    coverLetter: { type: Schema.Types.ObjectId, ref: 'File' } // Reference to File model
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
