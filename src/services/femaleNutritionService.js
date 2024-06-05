const FemaleNutrition = require("../models/femaleNutrition");

class FemaleNutritionService {
       
    async createFemaleNutrition(femaleNutritionS) {
        return await FemaleNutrition.insertMany(femaleNutritionS);
    }

    async getAllFemaleNutritionS(){
        return await FemaleNutrition.find();
    }
};

module.exports = new FemaleNutritionService();