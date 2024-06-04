const express = require('express');
const  kycTabController = require("../controllers/kycTabController");
const router = express.Router();

router.post("/", kycTabController.createKycTab);
router.get("/", kycTabController.getAllKycTabs);
module.exports = router;