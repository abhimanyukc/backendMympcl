const express = require('express');
const emiController = require("../controllers/emiController");

const router = express.Router();

router.post("/", emiController.createEmi);
router.get("/", emiController.getAllEmi);
module.exports = router;