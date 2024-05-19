const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require('fs');
const path = require('path');

const contactRoutes = require("./routes/contactRoute");
const emiRoutes = require("./routes/emiRoute");
const kycRoutes = require("./routes/kycRoute");
const applicationRoutes = require("./routes/applicationFormRoute");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Create 'uploads' directory if it doesn't exist
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/contact/", contactRoutes);
app.use("/api/emicalculator/", emiRoutes);
app.use("/api/kyc/", kycRoutes);
app.use("/api/career/ApplicationForm/", applicationRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
