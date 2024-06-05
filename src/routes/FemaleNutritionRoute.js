

//femaleNutritionRoute.js
const express = require('express');
const femaleNutritionController = require('../controllers/health/femaleNutritionController');

const router = express.Router();

router.post("/", femaleNutritionController.createFemaleNutrition);
router.get("/", femaleNutritionController.getAllFemaleNutritionS);
module.exports = router;