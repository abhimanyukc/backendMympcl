const express = require('express');
const  gallery2Controller = require("../controllers/gallery2Controller");

const router = express.Router();

router.post("/", gallery2Controller.createGallery2);
router.get("/", gallery2Controller.getAllGalleries2);
module.exports = router;