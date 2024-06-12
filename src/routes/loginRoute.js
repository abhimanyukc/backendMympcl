const express = require('express');
const loginController = require("../controllers/auth/loginController");

const router = express.Router();

router.post("/", (req, res) => loginController.login(req, res));

module.exports = router;


