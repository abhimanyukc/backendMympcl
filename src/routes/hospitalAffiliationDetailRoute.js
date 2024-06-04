const express = require('express');
const  hospitalAffiliationDetailController = require("../controllers/healthprogram/hospitalAffiliationDetailController");

const router = express.Router();

router.post("/", hospitalAffiliationDetailController.createHospitalAffiliationDetail);
router.get("/", hospitalAffiliationDetailController.getAllHospitalAffiliationDetails);
module.exports = router;