
//dbConfig.js
//mongodb connection configuration
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/multipurpose", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", ()=> {
    console.log("Connected to MongoDB");
})
      
mongoose.connection.on("error", (err)=> {
    console.error(`Mongodb connection error: ${error}`);
})
//exports this mongoose and its connection status
module.exports = mongoose;