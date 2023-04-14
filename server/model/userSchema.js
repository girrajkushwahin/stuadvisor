const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    number: {
        type: Number,
        required: true,
        unique: true,
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
        trim: true,
        minlength: 4,
        maxlength: 26
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    cpassword: {
        type: String,
        required: true,
        minlength: 8,
    },
    gender: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['male', 'female', 'other']
    },
    date: {
        type: Date,
        default: Date.now
    },
    messages: [
        {
            name: {
                type: String,
                required: true,
                trim: true,
                minlength: 3,
            },
            email: {
                type: String,
                required: true,
                trim: true
            },
            message: {
                type: String,
                required: true,
                trim: true,
            }
        }
    ],
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
})

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, 'mynameisgirrajtechnicalakarootkaalsec');
        this.tokens = this.tokens.concat({ token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}

userSchema.methods.addMessage = async function (name, email, message) {
    try {
        this.messages = this.messages.concat({ name, email, message });
        await this.save();
        return this.messages;
    } catch (err) {
        console.log(err);
    }
}

const Registration = mongoose.model('Registration', userSchema);

module.exports = Registration;