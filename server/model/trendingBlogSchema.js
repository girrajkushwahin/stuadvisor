const mongoose = require('mongoose');

const trendingBlogSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
        trim: true,
    },
    blog: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const TrendingBlog = mongoose.model('TrendingBlog', trendingBlogSchema);

module.exports = TrendingBlog;