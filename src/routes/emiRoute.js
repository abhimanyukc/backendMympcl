

//emiRoute.js
const express = require('express');
const emiController = require("../controllers/emiController");

const router = express.Router();

router.post("/", emiController.createEmi);
router.get("/", emiController.getAllEmiS);
module.exports = router;