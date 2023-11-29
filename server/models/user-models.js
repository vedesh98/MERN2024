const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

})


// define collection name 

const User = new mongoose.model("User", userSchema);
module.exports = User;