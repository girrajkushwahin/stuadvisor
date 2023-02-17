const express = require('express');
const cors = require('cors');
const app = express();
// const mongoose = require('mongoose');
PORT = 9000;

require('./db/connection');
app.use(express.json());
app.use(cors());
app.use(require('./routes/auth'));

const middleware = (req, res, next) => {
    console.log('this is middleware');
    // next();
}
// middleware();

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})