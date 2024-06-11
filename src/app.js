//app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const authRoutes = require("./routes/authRoutes");
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
const signUpRoute = require("./routes/signUpRoute");
const loginRoute = require("./routes/loanRoute");
const passwordResetRoutes = require('./routes/passwordResetRoutes');

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

// Create 'uploadsRemittance' directory if it doesn't exist
if (!fs.existsSync('uploadsRemittance')) {
    fs.mkdirSync('uploadsRemittance');
}

// Middleware to handle static files without extensions
app.use('/uploadsRemittance', (req, res, next) => {
    let filePath = path.join(__dirname, 'uploadsRemittance', req.path);
    const extensions = ['.png', '.jpg', '.jpeg', '.gif'];
    const file = extensions.find(ext => fs.existsSync(filePath + ext));
    if (file) {
        req.url += file;
    }
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
app.use("/api/gallery/", galleryRoutes);
app.use("/api/gallery/album1/", gallery1Routes);
app.use("/api/gallery/album2/", gallery2Routes);
app.use("/api/gallery/album3/", gallery3Routes);
app.use("/api/gallery/album4/", gallery4Routes);
app.use("/api/service/", serviceRoutes);
app.use("/api/information/", informationRoutes);
app.use("/api/organization/", organizationRoutes);
app.use("/api/membership/", teamMemberRoutes);
app.use("/api/department/", departmentRoutes);
app.use("/api/branches/", branchRoutes);
app.use("/api/signUp/", signUpRoute);
app.use("/api/login/", loginRoute);
app.use("/api/reset-password/", passwordResetRoutes);
app.use("/api/auth",  authRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
