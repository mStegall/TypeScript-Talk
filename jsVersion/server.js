const express = require('express');
const body = require('body-parser');
const router = require('./router');

var app = express();

app.use(body.json());

app.use('/', router.router);

app.listen(3000, function () {
    console.log('Server started');
});
