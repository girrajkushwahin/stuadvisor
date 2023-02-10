const express = require('express');
const router = express.Router();

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
        }
        const user = new Registration({ name, phone, email, username, password, cpassword, gender });
        const userRegister = await user.save();
        if (userRegister) res.status(201).json({ message: 'user registered successfully' });
        else res.status(500).json({ error: 'failed to register' });
    } catch (err) {
        console.log(err)
    };
})

module.exports = router;