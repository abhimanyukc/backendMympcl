const express = require('express');
const  noticeController = require("../controllers/noticeController");

const router = express.Router();

router.post("/", noticeController.createNotice);
router.get("/", noticeController.getAllNotices);
module.exports = router;