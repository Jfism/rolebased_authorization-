// Load environment variables
require('dotenv').config();
//console.log('Loaded Environment Variables:', process.env); // Log all environment variables

// Place this at the top to load env variables

const express = require("express");
const dbConnect = require("./config/dbConnection"); // Import your database connection function

// Establish the database connection
dbConnect();

const app = express();

// Middleware
app.use(express.json()); // Enable JSON body parsing

// Start the server 
const PORT = process.env.PORT || 7001; 
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`); // Logs the server port
});
