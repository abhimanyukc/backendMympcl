
//signUpRoutes.js
const express = require('express');
const signUpController = require("../controllers/auth/signUpController");

const router = express.Router();

router.post("/", signUpController.createSignUp.bind(signUpController));
router.get("/", signUpController.getAllSignUps.bind(signUpController));

module.exports = router;
