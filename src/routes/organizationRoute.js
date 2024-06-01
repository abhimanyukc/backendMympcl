const express = require('express');
const  organizationController = require("../controllers/organizationController");

const router = express.Router();

router.post("/", organizationController.createOrganization);
router.get("/", organizationController.getAllOrganizations);
module.exports = router;