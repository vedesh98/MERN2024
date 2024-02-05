const Contact = require("../models/contact-models");




module.exports.contactform = async (request, response) => {
    try {
        const responseto = request.body;
        console.log('contact');
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

