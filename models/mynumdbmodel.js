const mongoose = require("mongoose");

const mynumschema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("mynumdbmodel",mynumschema);