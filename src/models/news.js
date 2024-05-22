
const mongoose = require("../configuration/dbConfig");

const newsSchema = new mongoose.Schema({
    
    id:Number,
    title: { 
     type:  String,
     required: true
    },
    image: { 
        type:  String,
        required: true
       },
    details: { 
        type:  String,
        required: true
       }
})

const News = mongoose.model("News", newsSchema);

module.exports = News;