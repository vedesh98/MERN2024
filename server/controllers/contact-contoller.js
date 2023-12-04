const { request, response } = require("express");
const Contact = require("../models/user-contact");
const { ConnectionStates } = require("mongoose");




module.exports.contactform = async (request, response) => {
    try {
        const responseto = request.body;
        await Contact.create(responseto);
        return response.status(200).json({ message: "message send successfully" });

    } catch (err) {
        const error = {
            status: 500,
            message: "message not deliverd",
            extraDetails: err
        }

        next(error);

    }
}

