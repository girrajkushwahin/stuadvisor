const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');

const Registration = require('../model/userSchema');
const contactMessage = require('../model/messageSchema');
const Blog = require('../model/blogSchema');
const TrendingBlog = require('../model/trendingBlogSchema');
const PostedBlog = require('../model/postedBlogSchema');
const topclg = require('../data/topclg');
const clgData = require('../data/colleges');
const branchsem = require('../data/banchsem.json');
const subjects = require('../data/subjects.json');
const units = require('../data/units.json');
const academicsData = [branchsem, subjects, units];

router.get('/', (req, res) => {
    res.send('HomePage - Express');
})

router.get('/searchcolleges', (req, res) => {
    res.status(200).json(clgData);
})

router.get('/academics', (req, res) => {
    res.status(200).json(academicsData);
})

router.get('/topclg', (req, res) => {
    res.status(200).json(topclg);
})

router.get('*', (req, res) => {
    res.send('404 - Not found');
})

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ message: "pls fill the data" });

        const userLogin = await Registration.findOne({ username });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            if (!isMatch) res.status(400).json({ message: "Invalid Credentials" });
            else {
                let token = await userLogin.generateAuthToken();
                res.status(201).json({ jwtoken: token, message: "signin successfully", usrname: userLogin.username });
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
            await user.generateAuthToken();
            const userRegister = await user.save();

            if (userRegister) res.status(201).json({ message: 'User registered successfully' });
            else res.status(500).json({ message: 'Failed to register' });
        }
    } catch (err) {
        console.log(err);
    };
})

router.post('/confidential', authenticate, (req, res) => {
    res.send("Authentication successful");
})

router.post('/getcontact', authenticate, (req, res) => {
    res.send(req.rootUser);
})

router.post('/getmessage', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(422).json({ message: 'Please fill the form properly' });
    try {
        const userContact = await Registration.findOne({ email });
        if (userContact) {
            await userContact.addMessage(name, email, message);
            const saveStatus = await userContact.save();
            if (saveStatus) res.status(201).json({ message: 'Message Sent' });
            else res.status(500).json({ message: 'Internal error' });
        } else {
            const userMessage = new contactMessage({ name, email, message });
            const messageSave = await userMessage.save();

            if (messageSave) res.status(201).json({ message: 'Message Sent' });
            else res.status(500).json({ message: 'Internal error' });
        }
    } catch (err) {
        console.log(err);
    }
})

router.post('/blogs', async (req, res) => {
    const { type } = req.body;
    if (type === 'post') {
        res.status(201).json({ message: 'Post request' });
    }
    if (type === 'get') {
        let blog, postedBlog, trendingBlog;
        const getData = async () => {
            try {
                blog = await Blog.find();
                postedBlog = await PostedBlog.find();
                trendingBlog = await TrendingBlog.find();
                if (blog && postedBlog && trendingBlog) res.status(201).json({ blog, postedBlog, trendingBlog });
                else res.status(500).json({ message: 'Error occured while fetching the data' });
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }
})

router.post('/updateprofile', authenticate, async (req, res) => {
    const { name, email, number, username, gender } = req.body.data;
    const uniqueID = req.uniqueID;
    const secretKey = 'mynameisgirrajtechnicalakarootkaalsec';
    let mailToken, numToken, usrnameToken, mailID, numID, usrnameID, status = 'false';

    try {
        const mailExist = await Registration.findOne({ email });
        const numExist = await Registration.findOne({ number });
        const usrnameExist = await Registration.findOne({ username });

        if (mailExist) {
            mailToken = mailExist.tokens[0].token;
            const verification = jwt.verify(mailToken, secretKey);
            if (status === 'false') {
                if (uniqueID !== verification._id) res.status(422).json({ message: 'Email already exists' });
                // else mailID = 'true';
                else status = 'true';
            }
        }
        if (numExist) {
            numToken = numExist.tokens[0].token;
            const verification = jwt.verify(numToken, secretKey);
            if (status === 'false') {
                if (uniqueID !== verification._id) res.status(422).json({ message: 'Number already exists' });
                // else numID = 'true';
                else status = 'true';
            }
        }
        if (usrnameExist) {
            usrnameToken = usrnameExist.tokens[0].token;
            const verification = jwt.verify(usrnameToken, secretKey);
            if (status === 'false') {
                if (uniqueID !== verification._id) res.status(422).json({ message: 'Username already exists' });
                // else usrnameID = 'true';
                else status = 'true';
            }
        }
        if (status === 'true') {
            const result = await Registration.updateOne({ _id: req.uniqueID }, {
                $set: { name, email, number, username, gender }
            })
            if (result) res.status(201).json({ message: 'Updated' });
            else res.status(500).json({ message: 'Failed' });
        }
        // if (mailID && numID && usrnameID) {
        //     const result = await Registration.updateOne({ _id: req.uniqueID }, {
        //         $set: { name, email, number, username, gender }
        //     })
        //     if (result) res.status(201).json({ message: 'Updated' });
        //     else res.status(500).json({ message: 'Failed' });
        // }
    } catch (err) {
        console.log(err);
    }
})

router.post('/changepassword', async (req, res) => {
    // const { curpass, newpass, cnewpass } = req.body;
    // res.status(201).json({ message: 'Updated Successfully' });
    // res.status(500).json({ message: 'Error Occured' });
})

router.post('/logoutall', async (req, res) => {
    const logOutAll = async username => {
        try {
            const result = await Registration.updateOne({ username }, {
                $unset: {
                    tokens: ''
                }
            })
            if (result) res.status(201).json({ message: 'Signed Out' });
            else res.status(500).json({ message: 'Error Occured' });
        } catch (err) {
            console.log(err);
        }
    }
    logOutAll(req.body.data);
})

module.exports = router;