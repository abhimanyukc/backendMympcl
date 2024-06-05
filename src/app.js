

//app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require('fs');
const path = require('path');

const contactRoutes = require("./routes/contactRoute");
const emiRoutes = require("./routes/emiRoute");
const kycRoutes = require("./routes/kycRoute");
const kycTabRoutes = require("./routes/kycTabRoute");
const applicationRoutes = require("./routes/applicationFormRoute");
const careerRoutes = require("./routes/careerRoute");
const newsRoutes = require("./routes/newsRoute");
const locationRoutes = require("./routes/locationRoute");
const downloadFormRoutes = require("./routes/downloadFormRoute");
const interestRateRoutes = require("./routes/interestRateRoute");
const remittanceRoutes = require("./routes/remittanceRoute");
const noticeRoutes = require("./routes/noticeRoute");
const healthProgramRoutes = require("./routes/healthProgramRoute");
const hospitalAffiliationDetailRoutes = require("./routes/hospitalAffiliationDetailRoute");
const lifeSavingRoutes = require("./routes/lifeSavingRoute");
const femaleNutritionRoutes = require("./routes/FemaleNutritionRoute");
const loanRoutes = require("./routes/loanRoute");
const reportRoutes = require("./routes/reportRoute");
const galleryRoutes = require("./routes/galleryRoute");
const gallery1Routes = require("./routes/gallery1Route");
const gallery2Routes = require("./routes/gallery2Route");
const gallery3Routes = require("./routes/gallery3Route");
const gallery4Routes = require("./routes/gallery4Route");
const serviceRoutes = require("./routes/serviceRoute");
const informationRoutes = require("./routes/informationRoute");
const organizationRoutes = require("./routes/organizationRoute");
const teamMemberRoutes = require("./routes/teamMemberRoute");
const departmentRoutes = require("./routes/departmentRoute");
const branchRoutes = require("./routes/branchRoute");
const formDetailRoute = require("./routes/formDetailRoute");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Create 'uploads' directory if it doesn't exist
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Serving static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Create 'uploads' directory if it doesn't exist
if (!fs.existsSync('uploadsRemittance')) {
    fs.mkdirSync('uploadsRemittance');
}
// Middleware to handle static files without extensions
//When a request matches this route, the middleware function will be executed.
app.use('/uploadsRemittance', (req, res, next) => {
    //The path.join(__dirname, 'uploadsRemittance', req.path) 
    //concatenates the current directory (__dirname), the uploadsRemittance folder, and the requested path.
    let filePath = path.join(__dirname, 'uploadsRemittance', req.path);

    // Try with different common image extensions
    const extensions = ['.png', '.jpg', '.jpeg', '.gif'];
    //It checks if any of these extensions exist alongside the requested file path.
    const file = extensions.find(ext => fs.existsSync(filePath + ext));
//If an image file with any of these extensions is found, it modifies the request URL by appending the extension (e.g., /helloworld.png)
    if (file) {
        req.url += file;
    }
    //After processing, the middleware calls next() to pass control to the next middleware in the chain.
    //If no image file with the specified extensions is found, the original request URL remains unchanged.
    next();
});

// Serve static files from 'uploadsRemittance' directory
app.use('/uploadsRemittance', express.static(path.join(__dirname, 'uploadsRemittance')));

app.use("/api/contact/", contactRoutes);
app.use("/api/emiCalculator/", emiRoutes);
app.use("/api/kyc/", kycRoutes);
app.use("/api/kycTab/", kycTabRoutes);
app.use("/api/career/ApplicationForm/", applicationRoutes);
app.use("/api/career/formDetail/", formDetailRoute);
app.use("/api/career/", careerRoutes);
app.use("/api/news/", newsRoutes);
app.use("/api/location/", locationRoutes);
app.use("/api/downloadForm/", downloadFormRoutes);
app.use("/api/interestRate/", interestRateRoutes);
app.use("/api/remittance/", remittanceRoutes);
app.use("/api/notice/", noticeRoutes);
app.use("/api/healthProgram/", healthProgramRoutes);
app.use("/api/healthProgram/hospitalAffiliationDetail/", hospitalAffiliationDetailRoutes);
app.use("/api/healthProgram/femaleNutrition/", femaleNutritionRoutes);
app.use("/api/healthProgram/lifeSaving/", lifeSavingRoutes);
app.use("/api/loan/", loanRoutes);
app.use("/api/reports/", reportRoutes);
app.use("/api/gallery/",galleryRoutes);
app.use("/api/gallery/album1/",gallery1Routes);
app.use("/api/gallery/album2/",gallery2Routes);
app.use("/api/gallery/album3/",gallery3Routes);
app.use("/api/gallery/album4/",gallery4Routes);
app.use("/api/service/",serviceRoutes);
app.use("/api/information/",informationRoutes);
app.use("/api/organization/",organizationRoutes);
app.use("/api/membership/",teamMemberRoutes);
app.use("/api/department/",departmentRoutes);
app.use("/api/branches/",branchRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
