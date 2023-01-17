const mongoose = require('mongoose');
const DB_PORT = 27017
const DB_NAME = "Job_Tracker"
const uri = `mongodb+srv://akram:1234@cluster0.ukf1pia.mongodb.net/?retryWrites=true&w=majority`;

module.exports = { mongoose, uri };