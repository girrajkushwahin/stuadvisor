const express = require('express');
const cors = require('cors');
const app = express();
// const mongoose = require('mongoose');
app.use(express.json());
app.use(cors());
PORT = 8000;

require('./db/connection');
app.use(require('./routes/auth'));

const middleware = (req, res, next) => {
    console.log('this is middleware');
    // next();
}
// middleware();

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})