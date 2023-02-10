const express = require('express');
const app = express();
// const mongoose = require('mongoose');
PORT=9000;

require('./db/connection');
app.use(express.json());
app.use(require('./routes/auth'));

const middleware = (req, res, next) => {
    console.log('this is middleware');
    // next();
}
// middleware();

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})