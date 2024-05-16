const express = require('express');
const  kycController = require("../controllers/kycController");

const router = express.Router();

router.post("/", kycController.createKyc);
router.get("/", kycController.getAllKyc);
module.exports = router;