const mongoose = require('mongoose');

const contacts = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add name!"]
    },
    email: {
        type: String,
        required: [true, "Please add email!"],
        unique: true
    },
    phone: {
        type: String,
        required: [true, "Please add phone number"],
        unique: true
    }
}, {timestamps: true})

module.exports = mongoose.model("contacts", contacts)