const express = require('express');
const  informationController = require("../controllers/informationController");

const router = express.Router();

router.post("/", informationController.createInformation);
router.get("/", informationController.getAllInformationS);
module.exports = router;