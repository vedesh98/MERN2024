const bcrypt = require("bcrypt");
const User = require("../models/user-models");



module.exports.home = async (request, response) => {
    try {
        response
            .status(200)
            .json({
                message: "welcome to MERN series"
            });
    } catch (err) {
        const error = {
            message: "internal server error",
            status: 500,
            extraDetails: err
        }
        next(error);
    }
}

module.exports.register = async (request, response) => {
    try {
        const { username, phone, email, password } = request.body;
        const userexist = await User.findOne({ email: email });

        if (userexist) {
            return response.json({ msg: "email already exists" })
        }
        const NewUser = await User.create({
            username,
            email,
            phone,
            password
        });

        response
            .status(201)
            .json({
                msg: NewUser,
                token: await NewUser.getrateToken(),
                userId: NewUser._id.toString(),
            });

    } catch (err) {
        const error = {
            message: "internal server error",
            status: 500,
            extraDetails: err
        }
        next(error);
    }
}

// *----------------------
//* User Login Logic
// *----------------------
module.exports.login = async (request, response, next) => {
    try {
        const { email, password } = request.body;

        const FindUser = await User.findOne({ email });

        if (!FindUser) {
            response.status(400).send({
                message: "Invalid Credentials"
            });
        }

        const compareResult = await FindUser.compareToken(password);
        response.status(compareResult.status).json(compareResult);


    } catch (err) {
        const error = {
            message: "internal server error",
            status: 500,
            extraDetails: err
        }
        next(error);
        // throw error
    }
}


// *----------------------
//* Contact Logic
// *----------------------