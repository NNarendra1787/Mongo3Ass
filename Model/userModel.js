const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    lastCompany: {
        type: String,
        required: true
    },
    lastSalary: {
        type: String,
        required: true
    },
    overallExp: {
        type: String,
        required: true
    },
    contactInfo: {
        type: String,
        required: true
    },
    yearGrad: {
        type: String,
        required: true
    },
    gradStream: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.model("employee", userSchema)