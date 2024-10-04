const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env. connectionString);
        console.log(`Database connected: ${connect.connection.host}, DB Name: ${connect.connection.name}`); // Use backticks for template literals
    } catch (err) {
        console.error('Connection error:', err.message);
        process.exit(1);
    }
};

module.exports = dbConnect; // Export the function itself, not the result of calling it
