const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    review: {
        type: String,
        required: true,
        trim: true
    },
    stars: {
        type: String,
        required: true,
    },
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;