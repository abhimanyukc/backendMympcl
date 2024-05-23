const express = require('express');
const  newsController = require("../controllers/newsController");

const router = express.Router();

router.post("/", newsController.createNews);
router.get("/", newsController.getAllNews);
module.exports = router;
//