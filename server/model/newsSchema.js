const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
        trim: true
    },
    subheading: {
        type: String,
        required: true,
        trim: true
    },
    detail: {
        type: String,
        required: true,
        trim: true,
    }
})

const Update = mongoose.model('Update', newsSchema);

module.exports = Update;