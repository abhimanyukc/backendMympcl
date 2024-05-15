//main app.js file

//importing express
const express = require("express");

// body-parser is often used in the Express.js backend. It's a middleware that parses incoming request bodies before handling them, making it easier to work with JSON, URL-encoded, or form data. This module simplifies the process of accessing request data in your Express.js routes.
const bodyParser = require("body-parser");

// //importing cors
// const cors = require("cors")
//importing userRoutes
const contactRoutes = require("./routes/contactRoute")

//USING express function
const app = express();


//we will write configuration to set port of nodejs application
const PORT = process.env.PORT || 5000;
  
    
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
//   });

    //run this server in server/src
    //listening port
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    })
    app.use(bodyParser.json());
    // app.use(cors());
// api url
app.use("/api/contact/", contactRoutes);


