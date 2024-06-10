const mongoose = require("mongoose");
require("dotenv").config()
// const url = process.env.MONGODB_URI;
const url = "mongodb://0.0.0.0:27017/rrrr";



const connectDB = async () => {
    try {
        console.log(insever);
        await mongoose.connect(url);
        console.log("Connected");
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}

module.exports = connectDB;