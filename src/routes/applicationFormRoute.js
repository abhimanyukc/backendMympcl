const express = require('express');
const  applicationController = require("../controllers/applicationFormController")

const router = express.Router();

router.post("/", applicationController.createApplication);
router.get("/", applicationController.getAllApplications);
module.exports = router;