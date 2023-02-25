const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const authenticate = async (req, res, next) => {
    try {
        const { token } = req.body;
        const verification = jwt.verify(token, 'mynameisgirrajtechnicalakarootkaalsec');
        const rootUser = await User.findOne({ _id: verification._id, 'tokens.token': token });
        if (!rootUser) throw new Error('User not found');
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();
    } catch (err) {
        res.status(401).send('Unauthorized: Invalid user');
    }
}

module.exports = authenticate;