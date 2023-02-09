const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello from home router js');
})

module.exports = router;