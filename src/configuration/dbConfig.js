

//dbConfig.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/multipurpose", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.error(`Mongodb connection error: ${error}`);
});

module.exports = mongoose;
