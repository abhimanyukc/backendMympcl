const express = require('express');
const  galleryController = require("../controllers/galleryController");

const router = express.Router();

router.post("/", galleryController.createGallery);
router.get("/", galleryController.getAllGalleries);
module.exports = router;