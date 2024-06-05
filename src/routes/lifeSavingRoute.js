

//lifeSavingRoute.js
const express = require('express');
const lifeSavingController = require("../controllers/health/lifeSavingController");

const router = express.Router();

router.post("/", lifeSavingController.createLifeSaving);
router.get("/", lifeSavingController.getAllLifeSavingS);
module.exports = router;