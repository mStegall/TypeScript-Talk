"use strict";
var express = require('express');
var router_1 = require('./router');
var app = express();
app.use('/', router_1.router);
app.listen(3000, function () {
    console.log('Server started');
});
//# sourceMappingURL=server.js.map