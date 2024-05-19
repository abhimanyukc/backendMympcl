//routes

const express = require('express');
const applicationController = require("../controllers/applicationFormController");
const multer = require('multer');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/", upload.fields([{ name: 'cv' }, { name: 'coverLetter' }]), applicationController.createApplication);
router.get("/", applicationController.getAllApplications);

module.exports = router;
