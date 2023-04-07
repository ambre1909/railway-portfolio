const mongoose = require("mongoose")

module.exports = mongoose.model("contact", mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide name"]
    },
    email: {
        type: String,
        required: [true, "please provide email"]
    },
    subject: {
        type: String,
        required: [true, "please provide subject"]
    },
    message: {
        type: String,
        required: [true, "please provide message"]
    },
}, { timestamps: true }))