const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Registration = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('hello world1');
})

router.get('/searchcolleges', (req, res) => {
    res.send('hello world2');
})

router.get('/academics', (req, res) => {
    res.send('hello world3');
})

router.get('/blogs', (req, res) => {
    res.send('hello world4');
})

router.get('*', (req, res) => {
    res.send('hello world5');
})

router.post('/login', async (req, res) => {
    try {
        let token;
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ message: "pls fill the data" });

        const userLogin = await Registration.findOne({ username });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            if (!isMatch) res.status(400).json({ message: "Invalid Credentials" });
            else {
                token = await userLogin.generateAuthToken();
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 2592000000),
                    httpOnly: true
                });
                res.status(201).json({ message: "signin successfully" });
            }
        } else res.status(400).json({ message: "Invalid Credentials" });
    } catch (err) {
        console.log(err);
    }
})

router.post('/register', async (req, res) => {
    const { name, number, email, username, password, cpassword, gender } = req.body;
    if (!name || !number || !email || !username || !password || !cpassword || !gender) {
        return res.status(422).json({ message: 'Please fill the form properly' });
    }
    try {
        const mailExist = await Registration.findOne({ email });
        const numExist = await Registration.findOne({ number });
        const usrnameExist = await Registration.findOne({ username });

        if (mailExist) res.status(422).json({ message: 'Email already exists' });
        else if (numExist) res.status(422).json({ message: 'Number already exists' });
        else if (usrnameExist) res.status(422).json({ message: 'Username already exists' });
        else if (password != cpassword) res.status(422).json({ message: 'Password not matching' });
        else {
            const user = new Registration({ name, number, email, username, password, cpassword, gender });
            const userRegister = await user.save();

            if (userRegister) res.status(201).json({ message: 'User registered successfully' });
            else res.status(500).json({ message: 'Failed to register' });
        }
    } catch (err) {
        console.log(err);
    };
})

module.exports = router;