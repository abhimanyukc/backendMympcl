const express = require('express');
const  healthProgramController = require("../controllers/healthProgramController");

const router = express.Router();

router.post("/", healthProgramController.createHealthProgram);
router.get("/", healthProgramController.getAllHealthPrograms);
module.exports = router;