const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minlength: 4
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    cpassword: {
        type: String,
        required: true,
        minlength: 3
    },
    gender: {
        type: String,
        required: true,
        lowercase: true
    }
})

const Registration = mongoose.model('Registration', userSchema);

module.exports = Registration;