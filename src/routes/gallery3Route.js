const express = require('express');
const  gallery3Controller = require("../controllers/gallery3Controller");

const router = express.Router();

router.post("/", gallery3Controller.createGallery3);
router.get("/", gallery3Controller.getAllGalleries3);
module.exports = router;