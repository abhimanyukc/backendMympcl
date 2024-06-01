const express = require('express');
const  branchController = require("../controllers/branchController");

const router = express.Router();

router.post("/", branchController.createBranch);
router.get("/", branchController.getAllBranches);
module.exports = router;