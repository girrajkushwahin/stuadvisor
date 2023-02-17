const mongoose = require('mongoose');

const DB = 'mongodb://127.0.0.1:27017/stuadvisor';

mongoose.set('strictQuery', false);
mongoose.connect(DB).then(() => {
    console.log('connected to DB at port 27017');
}).catch(err => console.log('error connecting db'));