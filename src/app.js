

//app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require('fs');
const path = require('path');

const contactRoutes = require("./routes/contactRoute");
const emiRoutes = require("./routes/emiRoute");
const kycRoutes = require("./routes/kycRoute");
const applicationRoutes = require("./routes/applicationFormRoute");
const careerRoutes = require("./routes/careerRoute");
const newsRoutes = require("./routes/newsRoute");
const locationRoutes = require("./routes/locationRoute");
const downloadFormRoutes = require("./routes/downloadFormRoute");
const interestRateRoutes = require("./routes/interestRateRoute");
const remittanceRoutes = require("./routes/remittanceRoute");
const noticeRoutes = require("./routes/noticeRoute");
const healthProgramRoutes = require("./routes/healthProgramRoute");
const loanRoutes = require("./routes/loanRoute");
const reportRoutes = require("./routes/reportRoute");
const galleryRoutes = require("./routes/galleryRoute");
const gallery1Routes = require("./routes/gallery1Route");
const gallery2Routes = require("./routes/gallery2Route");
const gallery3Routes = require("./routes/gallery3Route");
const gallery4Routes = require("./routes/gallery4Route");
const serviceRoutes = require("./routes/serviceRoute");
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


app.use("/api/contact/", contactRoutes);
app.use("/api/emicalculator/", emiRoutes);
app.use("/api/kyc/", kycRoutes);
app.use("/api/career/ApplicationForm/", applicationRoutes);
app.use("/api/career/", careerRoutes);
app.use("/api/news/", newsRoutes);
app.use("/api/location/", locationRoutes);
app.use("/api/downloadForm/", downloadFormRoutes);
app.use("/api/interestRate/", interestRateRoutes);
app.use("/api/remittance/", remittanceRoutes);
app.use("/api/notice/", noticeRoutes);
app.use("/api/healthProgram/", healthProgramRoutes);
app.use("/api/loan/", loanRoutes);
app.use("/api/reports/", reportRoutes);
app.use("/api/gallery/",galleryRoutes);
app.use("/api/gallery/album1/",gallery1Routes);
app.use("/api/gallery/album2/",gallery2Routes);
app.use("/api/gallery/album3/",gallery3Routes);
app.use("/api/gallery/album4/",gallery4Routes);
app.use("/api/service/",serviceRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
