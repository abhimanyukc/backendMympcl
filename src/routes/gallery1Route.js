const express = require('express');
const  gallery1Controller = require("../controllers/gallery1Controller");

const router = express.Router();

router.post("/", gallery1Controller.createGallery1);
router.get("/", gallery1Controller.getAllGalleries1);
module.exports = router;