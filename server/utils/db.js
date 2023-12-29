const mongoose = require("mongoose");
require("dotenv").config()
const url = process.env.MONGODB_URI;



const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected");
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}

module.exports = connectDB;