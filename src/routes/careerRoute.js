const express = require('express');
const  careerController = require("../controllers/careerController");

const router = express.Router();

router.post("/", careerController.createCareer);
router.get("/", careerController.getAllCareers);
module.exports = router;