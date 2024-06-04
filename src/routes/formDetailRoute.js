

//formDetailRoute.js
const express = require('express');
const formDetailController = require("../controllers/formDetailController");

const router = express.Router();

router.post("/",  formDetailController.createFormDetail);
router.get("/", formDetailController.getAllFormDetails);
module.exports = router;