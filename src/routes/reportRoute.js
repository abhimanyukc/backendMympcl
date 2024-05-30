const express = require('express');
const  reportController = require("../controllers/reportController");

const router = express.Router();

router.post("/", reportController.createReport);
router.get("/", reportController.getAllReports);
module.exports = router;