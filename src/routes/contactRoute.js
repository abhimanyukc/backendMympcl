const express = require('express');
const  contactController = require("../controllers/contactController");

const router = express.Router();

router.post("/", contactController.createContact);
router.get("/", contactController.getAllContacts);
module.exports = router;