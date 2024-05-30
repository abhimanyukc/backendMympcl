const express = require('express');
const  loanController = require("../controllers/loanController");

const router = express.Router();

router.post("/", loanController.createLoan);
router.get("/", loanController.getAllLoans);
module.exports = router;