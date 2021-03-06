"use strict";
const express = require('express');
const body = require('body-parser');
const router_1 = require('./router');
var app = express();
app.use(body.json());
app.use('/', router_1.router);
app.listen(3000, function () {
    console.log('Server started');
});
//# sourceMappingURL=server.js.map