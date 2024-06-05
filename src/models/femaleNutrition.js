
//creating femaleNutrition model in nodejs
//importing mongoose from dbConfig.js file
const mongoose = require("../configuration/dbConfig");

const femaleNutritionSchema = new mongoose.Schema({
    
    date:String,
    text: String
})

const FemaleNutrition = mongoose.model("FemaleNutrition", femaleNutritionSchema);

module.exports = FemaleNutrition;