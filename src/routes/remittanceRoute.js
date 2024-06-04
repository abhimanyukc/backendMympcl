
//remittanceRoute.js
const express = require('express');
const  remittanceController = require("../controllers/remittanceController");

const router = express.Router();

router.post("/", remittanceController.createRemittance);
router.get("/", remittanceController.getAllRemittances);
module.exports = router;