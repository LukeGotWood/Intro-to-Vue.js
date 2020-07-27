'use strict';

const express = require('express');
const path = require('path');
const http = require('http');
const dotenv = require('dotenv');

dotenv.config();

let app = express();

app.use(express.static(path.join(__dirname, process.env.STATIC_DIR)));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, process.env.STATIC_DIR, 'index.html'));
});

http.createServer(app);

app.listen(process.env.PORT, () => {
    console.log('listening on 127.0.0.1:' + process.env.PORT);
});
