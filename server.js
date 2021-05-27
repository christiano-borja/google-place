'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(express.static('./dist/'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: './dist/'});
});

const host = 'localhost';
const port = process.env.PORT || 4200;

const server = require('http').Server(app);
server.listen(port, host);

console.log(`Listening on http://${host}:${port}`);
