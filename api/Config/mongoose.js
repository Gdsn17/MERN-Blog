const mongoose = require('mongoose')
const dbURL = process.env.dbURL
mongoose.connect(dbURL)
console.log("mongoose connected")