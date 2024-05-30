const express = require('express');
const  gallery4Controller = require("../controllers/gallery4Controller");

const router = express.Router();

router.post("/", gallery4Controller.createGallery4);
router.get("/", gallery4Controller.getAllGalleries4);
module.exports = router;