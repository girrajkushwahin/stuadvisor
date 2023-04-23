const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const staticPath = path.join(__dirname, './uploads');

app.use(express.json());
app.use(cors());
app.use(express.static(staticPath));
app.use(express.urlencoded({ extended: false }));
PORT = 8000;

require('./db/connection');
app.use(require('./routes/auth'));

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});