const express = require('express');
const interestRateController = require("../controllers/interestRateController");

const router = express.Router();

router.post("/", interestRateController.createInterestRates);
router.get("/", interestRateController.getAllInterestRates);

module.exports = router;
