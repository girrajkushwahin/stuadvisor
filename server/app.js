const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
PORT = 8000;

require('./db/connection');
app.use(require('./routes/auth'));

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})