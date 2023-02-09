const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('./db/connection');
require('./routes/auth');

const middleware = (req, res, next) => {
    console.log('this is middleware');
    // next();
}
// middleware();

app.get('/', (req, res) => {
    res.send('hello from home');
})
app.get('/searchcolleges', (req, res) => {
    res.send('hello from searchcolleges');
})
app.get('/academics', (req, res) => {
    res.send('hello from academics');
})
app.get('/blogs', (req, res) => {
    res.send('hello from blogs');
})
app.get('*', (req, res) => {
    res.send('hello, page not found on this server');
})

app.listen(8000, () => {
    console.log('server is running at port 8000')
})