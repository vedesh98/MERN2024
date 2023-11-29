const User = require("../models/user-models");

const home = async (request, response) => {
    try {
        response
            .status(200)
            .json({
                message: "welcome to MERN series"
            });
    } catch (error) {
        console.log(error);
    }
}

const register = async (request, response) => {
    try {

        const { username, phone, email, password } = request.body;
        const userexist = await User.findOne({ email: email });
        if (userexist) {
            return response.json({ msg: "email already exists" })
        }
        

        const NewUser = await User.create({
            username, email, phone, password
        })

        response
            .status(200)
            .json(NewUser);

    } catch (error) {
        response.send(500).json({
            msg: "internal server error"
        })
    }
}

module.exports = { home, register };