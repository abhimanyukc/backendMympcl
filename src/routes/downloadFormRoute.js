const express = require('express');
const downloadFormController = require('../controllers/downloadFormController');

const router = express.Router();

router.post("/", downloadFormController.createDownloadForm);
router.get("/", downloadFormController.getAllDownloadForms);
module.exports = router;