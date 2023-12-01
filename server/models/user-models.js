const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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


userSchema.pre('save', async function () {
    const user = this;
    if (!user.isModified("password")) {
        next();
    }
    try {
        // hash the password
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);
        user.password = hash_password;

    } catch (error) {
        next(error);
    }
})

// define collection name 
const User = new mongoose.model("User", userSchema);
module.exports = User;