const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    message: {
        type: String,
    }
})

const Contact = new model('Contact', contactSchema);

module.exports = Contact;