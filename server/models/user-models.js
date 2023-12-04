const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;

    } catch (error) {
        next(error);
    }
})

userSchema.methods.getrateToken = async function () {
    try {

        return jwt.sign(
            // payload
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            // signiture
            process.env.JRT_SELECT_KEY,
            {
                expiresIn: "30d",
            }

        )
    } catch (error) {
        console.error(error);

    }
}

userSchema.methods.compareToken = async function (password) {
    try {

        let compareResult = {};

        const user = await bcrypt.compare(password, this.password);
        if (user) {

            compareResult = {
                msg: 'Login Successfull',
                status: 201,
                token: await this.getrateToken(),
                userId: this._id.toString(),
            }
        } else {
            compareResult = {
                status: 401,
                msg: "Invalid Credentials",
            }
        }
        return compareResult;

    } catch (error) {
        console.error(error);
    }
}
// define collection name 
const User = new mongoose.model("User", userSchema);
module.exports = User;