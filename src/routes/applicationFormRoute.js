//routes

const express = require('express');
const applicationController = require("../controllers/applicationFormController");
const multer = require('multer');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
    //This property specifies the directory where uploaded files will be stored
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    //This property specifies the function used to determine the name of the uploaded file. 
    //In this case, it generates a unique filename based on the current timestamp (Date.now()) concatenated with the original filename of the uploaded file.

    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

//creating multer middleware instance
const upload = multer({ storage: storage });

const router = express.Router();

router.post("/", upload.fields([{ name: 'cv' }, { name: 'coverLetter' }]), applicationController.createApplication);
router.get("/", applicationController.getAllApplications);

module.exports = router;
