const express = require('express');
const  signUpController = require("../controllers/auth/signUpController");

const router = express.Router();

router.post("/", signUpController.createSignUp);
router.get("/", signUpController.getAllSignUps);
module.exports = router;