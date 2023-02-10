const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// require('../db/connection');
const Registration = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('hello from home router js');
})
router.get('/searchcolleges', (req, res) => {
    res.send('hello from router searchcolleges');
})
router.get('/academics', (req, res) => {
    res.send('hello from router academics');
})
router.get('/blogs', (req, res) => {
    res.send('hello from router blogs');
})
router.get('*', (req, res) => {
    res.send('hello, page not found on this server router');
})
router.post('/register', async (req, res) => {
    const { name, phone, email, username, password, cpassword, gender } = req.body;
    if (!name || !phone || !email || !username || !password || !cpassword || !gender) {
        return res.status(422).json({ error: 'pls fill the form properly' });
    }
    try {
        const userExist = await Registration.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: 'email already exist' });
        } else if (password != cpassword) return res.status(422).json({ error: 'pass not matching' });
        else {
            const user = new Registration({ name, phone, email, username, password, cpassword, gender });
            const userRegister = await user.save();

            if (userRegister) res.status(201).json({ message: 'user registered successfully' });
            else res.status(500).json({ error: 'failed to register' });
        }
    } catch (err) {
        console.log(err)
    };
})
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: "pls fill the data" });

        const userLogin = await Registration.findOne({ email: email });
        // console.log(userLogin);
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            if (!isMatch) res.status(400).json({ error: "Invalid credentials" });
            else res.status(201).json({ message: "user signin successfully" });
        } else res.status(400).json({ error: "Invalid credentials" });
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;